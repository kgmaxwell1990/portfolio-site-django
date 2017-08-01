from django.conf.urls import include, url
from .views import get_index, contact

urlpatterns = [
    url(r'^$', get_index, name="index"),
    url(r'^contact/$', contact, name='contact'),
]