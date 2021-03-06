from django.db import models

# Create your models here.
class Projects(models.Model):
    name = models.CharField(max_length=254, default='')
    description = models.TextField()
    image = models.ImageField(upload_to='images')
    image_description = models.CharField(max_length=254, default='')
    github_link = models.CharField(max_length=254, default='', blank=True)
    live_link = models.CharField(max_length=254, default='', blank=True)
    order_number = models.IntegerField(blank=True)


    def __str__(self):
        return self.name

class ProjectTechnologies(models.Model):
    project_name = models.ForeignKey(Projects, related_name='project_technologies')
    tech = models.CharField(max_length=254, default='', blank=True)