# Generated by Django 2.2.1 on 2019-05-06 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='dept_no',
            field=models.AutoField(max_length=4, primary_key=True, serialize=False, verbose_name='code'),
        ),
        migrations.AlterField(
            model_name='employee',
            name='emp_no',
            field=models.AutoField(primary_key=True, serialize=False, verbose_name='employee number'),
        ),
    ]
