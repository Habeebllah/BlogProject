# Generated by Django 4.1.3 on 2022-11-17 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='approval',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('Publish', 'Publish'), ('Draft', 'Draft')], default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='category',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]
