from rest_framework import routers
from .api import EmployeeViewSet

router = routers.DefaultRouter()
router.register('api/employee', EmployeeViewSet, 'employee')

urlpatterns = router.urls