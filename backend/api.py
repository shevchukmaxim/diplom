from backend.models import Employee, Department, DeptEmp, Lesson, LessonEmployee, Group, GroupEmployee, Cours, CoursLesson, CoursEmployee
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import GroupSerializer, GroupEmployeeSerializer, EmployeeSerializer, DepartmentSerializer, DeptEmpSerializer, LessonSerializer, LessonEmployeeSerializer, UsersSerializer, CoursSerializer, CoursLessonSerializer, CoursEmployeeSerializer

#Users ViewSet
class UsersViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = UsersSerializer
  def get_queryset(self):
      return User.objects.all()

#Employee ViewSet
class EmployeeViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = EmployeeSerializer
  def get_queryset(self):
      return Employee.objects.all()

  def perform_create(self, serializer):
      serializer.save()

#Department ViewSet
class DepartmentViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = DepartmentSerializer
  def get_queryset(self):
    return Department.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Department-Employee ViewSet
class DeptEmpViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = DeptEmpSerializer
  def get_queryset(self):
    return DeptEmp.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Lesson ViewSet
class LessonViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = LessonSerializer
  def get_queryset(self):
    return Lesson.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Lesson-Employee ViewSet
class LessonEmployeeViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = LessonEmployeeSerializer
  def get_queryset(self):
    return LessonEmployee.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Group ViewSet
class GroupViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = GroupSerializer
  def get_queryset(self):
    return Group.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Group-Employee ViewSet
class GroupEmployeeViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = GroupEmployeeSerializer
  def get_queryset(self):
    return GroupEmployee.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Cours ViewSet
class CoursViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CoursSerializer
  def get_queryset(self):
    return Cours.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Cours-Employee ViewSet
class CoursEmployeeViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CoursEmployeeSerializer
  def get_queryset(self):
    return CoursEmployee.objects.all()

  def perform_create(self, serializer):
    serializer.save()

#Cours-Lesson ViewSet
class CoursLessonViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CoursLessonSerializer
  def get_queryset(self):
    return CoursLesson.objects.all()

  def perform_create(self, serializer):
    serializer.save()