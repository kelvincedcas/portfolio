from django.urls import path
from . import views
from theme.views import change_theme

urlpatterns = [
    path('', views.home, name='home'),
    path('switch-theme/', change_theme, name='change-theme')
]
