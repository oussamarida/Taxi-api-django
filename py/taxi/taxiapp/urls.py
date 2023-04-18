
from django.urls import path, include
from rest_framework import routers
from .views import taxiMoViewSet


router = routers.DefaultRouter()
router.register(r'taximo', taxiMoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]