from django.contrib import admin
from .models import Projects, ProjectTechnologies
# Register your models here.

class ProjectTechnologiesInline(admin.TabularInline):
    model = ProjectTechnologies
    extra = 6

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ ProjectTechnologiesInline, ]

admin.site.register(Projects, ProjectAdmin)