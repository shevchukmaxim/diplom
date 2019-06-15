from rest_framework import routers
from .api import EmployeeViewSet, DepartmentViewSet, DeptEmpViewSet, LessonEmployeeViewSet, LessonViewSet, UsersViewSet, GroupViewSet, GroupEmployeeViewSet, CoursViewSet, CoursEmployeeViewSet, CoursLessonViewSet

router = routers.DefaultRouter()
router.register('api/employee', EmployeeViewSet, 'employee')
router.register('api/users', UsersViewSet, 'users')
router.register('api/department', DepartmentViewSet, 'department')
router.register('api/deptemp', DeptEmpViewSet, 'deptemp')
router.register('api/lesson', LessonViewSet, 'lesson')
router.register('api/lessonemployee', LessonEmployeeViewSet, 'lessonemployee')
router.register('api/group', GroupViewSet, 'group')
router.register('api/cours',CoursViewSet , 'cours')
router.register('api/coursemployee',CoursEmployeeViewSet, 'coursemployee')
router.register('api/courslesson',CoursLessonViewSet , 'courslesson')
router.register('api/groupemployee', GroupEmployeeViewSet, 'groupemployee')

urlpatterns = router.urls