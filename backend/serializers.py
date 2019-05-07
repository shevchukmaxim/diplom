from rest_framework import serializers
from backend.models import Employee

#Employee Serializer
class EmployeeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Employee
		fields = '__all__'