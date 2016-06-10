from django.conf.urls import url, include
from rest_framework import routers
#from rest_framework_extensions.routers import ExtendedSimpleRouter
from .views import CategoriaViewSet

# router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'categorias', CategoriaViewSet)

urlpatterns = [
    # url(r'^load_menu/$', load_menu, name='load_menu'),
    # url(r'^usermenu/$', UserMenuView.as_view()),

    url(r'^', include(router.urls)),
]
