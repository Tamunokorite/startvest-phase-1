from django.contrib.postgres.fields import ArrayField
from django.db import models
from users.models import user_type

# Create your models here.
class Startup(models.Model):
    user = models.OneToOneField(user_type, on_delete=models.CASCADE, primary_key=True)
    company_name = models.CharField(max_length=300)
    snapshot = models.TextField()
    company_size = models.IntegerField(default=1)
    location = models.CharField(max_length=200)
    business_model = (
        ('B2C', 'B2C'),
        ('B2B', 'B2B'),
        ('C2B', 'B2B'),
        ('C2C', 'C2C'),
    )
    website = models.CharField(max_length=200)
    registered = models.BooleanField()
    logo = models.ImageField(upload_to='media/startups/logos')
    team = ArrayField(models.CharField(max_length=300), blank=True)
    work_benefits = ArrayField(models.CharField(max_length=400), blank=True)
    category = ArrayField(models.CharField(max_length=200))

    def __str__(self):
        return self.company_name


class JobOpening(models.Model):
    company = models.OneToOneField(Startup, on_delete=models.CASCADE)
    job_title = models.TextField()
    description = models.TextField()
    location = models.CharField(max_length=200)
    application_link = models.CharField(max_length=600)
    salary = models.FloatField(null=True, blank=True)
    requirements = ArrayField(models.TextField())
    job_type = (
        ('FT', 'Full Time'),
        ('PT', 'Part Time'),
    )
    mode = (
        ('Remote', 'Remote'),
        ('In Person', 'In Person'),
    )
    extra_info = ArrayField(models.TextField())