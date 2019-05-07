from django.contrib import admin

# Register your models here.
from . import models


@admin.register(models.Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('dept_no', 'dept_name')


@admin.register(models.DeptEmp)
class DeptEmpAdmin(admin.ModelAdmin):
    list_display = ('employee', 'department', 'from_date', 'to_date')
    list_select_related = True
    raw_id_fields = ('employee', )
    list_filter = ('department', )


@admin.register(models.DeptManager)
class DeptManagerAdmin(admin.ModelAdmin):
    list_display = ('employee', 'department', 'from_date', 'to_date')
    raw_id_fields = ('employee', )
    list_filter = ('department', )


@admin.register(models.Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('emp_no', 'first_name', 'last_name', 'hire_date')


@admin.register(models.Salary)
class SalaryAdmin(admin.ModelAdmin):
    list_display = ('employee', 'from_date', 'to_date', 'salary')
    raw_id_fields = ('employee', )


@admin.register(models.Title)
class TitleAdmin(admin.ModelAdmin):
    list_display = ('employee', 'from_date', 'to_date', 'title')
    raw_id_fields = ('employee', )
    list_filter = ('title', )