# Generated by Django 2.2.1 on 2019-05-12 01:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20190512_0257'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='deptemp',
            name='from_date',
        ),
        migrations.RemoveField(
            model_name='deptemp',
            name='to_date',
        ),
    ]