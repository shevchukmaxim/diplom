# Generated by Django 2.2.1 on 2019-06-02 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0014_lesson_cours'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cours',
            name='description',
            field=models.CharField(blank=True, max_length=250, null=True, verbose_name='description'),
        ),
    ]