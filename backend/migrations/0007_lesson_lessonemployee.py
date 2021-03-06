# Generated by Django 2.2.1 on 2019-05-12 10:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20190512_0401'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='title')),
                ('date', models.DateField(verbose_name='date')),
                ('description', models.CharField(max_length=250, verbose_name='description')),
            ],
        ),
        migrations.CreateModel(
            name='LessonEmployee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('participation', models.BooleanField(default=False, verbose_name='participation')),
                ('score', models.CharField(blank=True, max_length=10, null=True, verbose_name='score')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='employee', related_query_name='employee', to='backend.Employee')),
                ('lesson', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lesson', related_query_name='lesson', to='backend.Lesson')),
            ],
        ),
    ]
