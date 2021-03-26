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
    BUSINESS_MODEL = (
        ('B2C', 'B2C'),
        ('B2B', 'B2B'),
        ('C2B', 'B2B'),
        ('C2C', 'C2C'),
    )
    website = models.CharField(max_length=200)
    registered = models.BooleanField()
    logo = models.ImageField(upload_to=f'media/startups/{company_name}/logo')
    team = ArrayField(models.CharField(max_length=300), blank=True)
    work_benefits = ArrayField(models.CharField(max_length=400), blank=True)
    pitch = models.FileField(upload_to=f'media/startups/{company_name}/pitch', null=True)
    category = ArrayField(models.CharField(max_length=200))
    business_model = models.CharField(max_length=200, choices=BUSINESS_MODEL, default='B2C')

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
    JOB_TYPE = (
        ('FT', 'Full Time'),
        ('PT', 'Part Time'),
    )
    job_type = models.CharField(max_length=200, choices=JOB_TYPE, null=True)
    MODE = (
        ('Remote', 'Remote'),
        ('In Person', 'In Person'),
    )
    mode = models.CharField(max_length=200, choices=MODE, null=True)
    extra_info = ArrayField(models.TextField())


class StartupGallery(models.Model):
    startup = models.ForeignKey(Startup, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=f'media/startups/{startup}/gallery')