# Generated by Django 2.2.1 on 2019-05-12 11:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0008_lesson_theme'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lessonemployee',
            name='employee',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='employee', related_query_name='employee', to='backend.Employee', unique=True),
        ),
    ]