from rest_framework import serializers
from rest_framework.settings import api_settings
from backend.models import Employee, Department, DeptEmp, Lesson, LessonEmployee, Group, GroupEmployee, Cours, CoursLesson, CoursEmployee
from django.contrib.auth.models import User

# User Serializer
class UsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'is_superuser')

#Employee Serializer
class EmployeeSerializer(serializers.ModelSerializer):
	department_name = serializers.ReadOnlyField()
	full_name = serializers.ReadOnlyField()
	username = serializers.ReadOnlyField()

	class Meta:
		model = Employee
		fields = '__all__'

#Department Serializer
class DepartmentSerializer(serializers.ModelSerializer):

  class Meta:
    model = Department
    fields = '__all__'

#Department-Employee Serializer
class DeptEmpSerializer(serializers.ModelSerializer):

  class Meta:
    model = DeptEmp
    fields = '__all__'

#Lesson Serializer
class LessonSerializer(serializers.ModelSerializer):
  cours_name = serializers.ReadOnlyField()

  class Meta:
    model = Lesson
    fields = '__all__'

#LessonEmployee Serializer
class LessonEmployeeSerializer(serializers.ModelSerializer):
  employee_name = serializers.ReadOnlyField()
  lesson_title = serializers.ReadOnlyField()
  lesson_date = serializers.ReadOnlyField()
  lesson_cours = serializers.ReadOnlyField()

  class Meta:
    model = LessonEmployee
    fields = '__all__'

#Group Serializer
class GroupSerializer(serializers.ModelSerializer):

  class Meta:
    model = Group
    fields = '__all__'

#GroupEmployee Serializer
class GroupEmployeeSerializer(serializers.ModelSerializer):
  employee_name = serializers.ReadOnlyField()
  group_name = serializers.ReadOnlyField()

  class Meta:
    model = GroupEmployee
    fields = '__all__'

#Cours Serializer
class CoursSerializer(serializers.ModelSerializer):

  class Meta:
    model = Cours
    fields = '__all__'

#CoursEmployee Serializer
class CoursEmployeeSerializer(serializers.ModelSerializer):
  employee_name = serializers.ReadOnlyField()
  cours_name = serializers.ReadOnlyField()

  class Meta:
    model = CoursEmployee
    fields = '__all__'

#CoursLesson Serializer
class CoursLessonSerializer(serializers.ModelSerializer):
  lesson_title = serializers.ReadOnlyField()
  lesson_date = serializers.ReadOnlyField()
  cours_name = serializers.ReadOnlyField()

  class Meta:
    model = CoursLesson
    fields = '__all__'