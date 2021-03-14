from django.shortcuts import render,redirect
from django.http import HttpResponse
from . import models
from .forms import OrderForm

# Create your views here.
def home(request):
    customers = models.Customer.objects.all()
    orders = models.Order.objects.all()

    total_customers = customers.count()
    total_orders = orders.count()

    delivered = orders.filter(status="Delivered").count()
    pending = orders.filter(status="Pending").count()

    context = {"customers": customers, "orders": orders, "total_customers":total_customers,
                "total_orders":total_orders, "delivered":delivered, "pending":pending }
    return render(request, "accounts/dashboard.html", context)

def products(request):
    products = models.Product.objects.all()
    return render(request, "accounts/products.html", {"products": products})

def customers(request, pk):
    customer = models.Customer.objects.get(id=pk)

    orders = customer.order_set.all()
    total_orders = orders.count()
    context = {"customer":customer, "orders":orders, "total_orders":total_orders}
    return render(request, "accounts/customers.html", context)

def createOrder(request, pk):
    customer = models.Customer.objects.get(id=pk)
    form = OrderForm()
    context = {"form":form,"customer":customer}
    if request.method=='POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            form.save() #saves the form in the database
            return redirect("/")

    return render(request, "accounts/order_form.html", context)

def updateOrder(request, pk):
    order = models.Order.objects.get(id=pk)

    form = OrderForm(instance=order) #To pre-fill 
    context = {"form":form}
    if form.is_valid():
        form.save() #saves the form in the database
        return redirect("/")
    return render(request, "accounts/order_form.html", context)

def deleteOrder(request, pk):
    order = models.Order.objects.get(id=pk)
    context = {"order":order}
    if request.method=="POST":
        order.delete()
        return redirect("/")
    return render(request, "accounts/delete_order.html", context)