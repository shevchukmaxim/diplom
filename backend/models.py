from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User


@python_2_unicode_compatible
class Department(models.Model):
    dept_no = models.AutoField(_('code'), primary_key=True, max_length=4)
    dept_name = models.CharField(_('name'), unique=True, max_length=40)

    class Meta:
        verbose_name = _('department')
        verbose_name_plural = _('departments')
        db_table = 'departments'
        ordering = ['dept_no']

    def __str__(self):
        return self.dept_name


@python_2_unicode_compatible
class DeptEmp(models.Model):
    employee = models.ForeignKey('Employee', on_delete=models.CASCADE, db_column='emp_no', verbose_name=_('employee'))
    department = models.ForeignKey(Department, on_delete=models.CASCADE, db_column='dept_no', verbose_name=_('department'))

    class Meta:
        verbose_name = _('department employee')
        verbose_name_plural = _('department employees')
        db_table = 'dept_emp'

    def __str__(self):
        return "{} - {}".format(self.employee, self.department)


@python_2_unicode_compatible
class DeptManager(models.Model):
    employee = models.ForeignKey('Employee', on_delete=models.CASCADE, db_column='emp_no', verbose_name=_('employee'))
    department = models.ForeignKey(Department, on_delete=models.CASCADE, db_column='dept_no', verbose_name=_('department'))
    from_date = models.DateField(_('from'))
    to_date = models.DateField(_('to'))

    class Meta:
        verbose_name = _('department manager')
        verbose_name_plural = _('department managers')
        db_table = 'dept_manager'
        ordering = ['-from_date']

    def __str__(self):
        return "{} - {}".format(self.employee, self.department)


@python_2_unicode_compatible
class Employee(models.Model):
    emp_no = models.AutoField(_('employee number'), primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
    birth_date = models.DateField(_('birthday'), null=True, blank=True)
    first_name = models.CharField(_('first name'), max_length=14)
    middle_name = models.CharField(_('middle name'), max_length=14)
    last_name = models.CharField(_('last name'), max_length=16)
    gender = models.CharField(_('gender'), max_length=1)
    hire_date = models.DateField(_('hire date'), null=True, blank=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='employees', related_query_name='employee', blank=True, null=True)

    @property
    def full_name(self):
        return "{} {} {}".format(self.last_name, self.first_name, self.middle_name)

    @property
    def department_name(self):
        return self.department.dept_name

    @property
    def username(self):
        return self.user.username

    class Meta:
        verbose_name = _('employee')
        verbose_name_plural = _('employees')
        db_table = 'employee'

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name, self.middle_name)


@python_2_unicode_compatible
class Salary(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, db_column='emp_no', verbose_name=_('employee'))
    salary = models.IntegerField(_('salary'))
    from_date = models.DateField(_('from'))
    to_date = models.DateField(_('to'))

    class Meta:
        db_table = 'salaries'
        ordering = ['-from_date']
        verbose_name = _('salary')
        verbose_name_plural = _('salaries')

    def __str__(self):
        return "{} - {}".format(self.employee, self.salary)


@python_2_unicode_compatible
class Title(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, db_column='emp_no', verbose_name=_('employee'))
    title = models.CharField(_('title'), max_length=50)
    from_date = models.DateField(_('from'))
    to_date = models.DateField(_('to'), blank=True, null=True)

    class Meta:
        verbose_name = _('title')
        verbose_name_plural = _('titles')
        db_table = 'titles'

    def __str__(self):
        return "{} - {}".format(self.employee, self.title)

@python_2_unicode_compatible
class Cours(models.Model):
    name = models.CharField(_('name'), max_length=50)
    date = models.DateField(_('date'), null=True, blank=True)
    description = models.CharField(_('description'), max_length=250, null=True, blank=True)

    def __str__(self):
        return self.name

@python_2_unicode_compatible
class Lesson(models.Model):
    title = models.CharField(_('title'), max_length=50)
    theme = models.CharField(_('theme'), max_length=250, null=True, blank=True)
    date = models.DateField(_('date'), null=True, blank=True)
    description = models.CharField(_('description'), max_length=250)
    cours = models.ForeignKey(Cours, on_delete=models.CASCADE, related_name='courslsn', related_query_name='courslsn', null=True, blank=True)

    @property
    def cours_name(self):
        return self.cours.name

    def __str__(self):
        return self.title

@python_2_unicode_compatible
class LessonEmployee(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='lesson', related_query_name='lesson')
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='employee', related_query_name='employee')
    participation = models.BooleanField(_('participation'), default=False)
    score = models.CharField(_('score'), max_length=10, null=True, blank=True)

    @property
    def employee_name(self):
        return self.employee.full_name

    @property
    def lesson_title(self):
        return self.lesson.title

    @property
    def lesson_date(self):
        return self.lesson.date

    @property
    def lesson_cours(self):
        return self.lesson.cours.id

    def __str__(self):
        return self.lesson

@python_2_unicode_compatible
class Group(models.Model):
    name = models.CharField(_('name'), max_length=50)

    def __str__(self):
        return self.name

@python_2_unicode_compatible
class GroupEmployee(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='groupemployee', related_query_name='groupemployee')
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='employeegroup', related_query_name='employeegroup')

    @property
    def employee_name(self):
        return self.employee.full_name

    @property
    def group_name(self):
        return self.group.name

    def __str__(self):
        return self.group



@python_2_unicode_compatible
class CoursLesson(models.Model):
    cours = models.ForeignKey(Cours, on_delete=models.CASCADE, related_name='courslesson', related_query_name='courslesson')
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='lessoncours', related_query_name='lessoncours')

    @property
    def cours_name(self):
        return self.cours.name

    @property
    def lesson_title(self):
        return self.lesson.title

    @property
    def lesson_date(self):
        return self.lesson.date

    def __str__(self):
        return self.cours

@python_2_unicode_compatible
class CoursEmployee(models.Model):
    cours = models.ForeignKey(Cours, on_delete=models.CASCADE, related_name='coursemployee', related_query_name='coursemployee')
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='employeecours', related_query_name='employeecours')

    @property
    def cours_name(self):
        return self.cours.name

    @property
    def employee_name(self):
        return self.employee.full_name

    def __str__(self):
        return self.cours



