# Generated by Django 2.2.1 on 2019-05-29 11:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_auto_20190516_1614'),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='name')),
            ],
        ),
        migrations.CreateModel(
            name='GroupEmployee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='employeegroup', related_query_name='employeegroup', to='backend.Employee')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='groupemployee', related_query_name='groupemployee', to='backend.Group')),
            ],
        ),
    ]
