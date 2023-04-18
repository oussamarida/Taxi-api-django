# Generated by Django 4.2 on 2023-04-15 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='taxiMo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(unique=True)),
                ('reste_brut', models.DecimalField(decimal_places=2, max_digits=8)),
                ('mnt_gasoil', models.DecimalField(decimal_places=2, max_digits=8)),
                ('rectte_brute', models.DecimalField(decimal_places=2, max_digits=8)),
                ('recette_net', models.DecimalField(decimal_places=2, max_digits=8)),
                ('charge_chf', models.DecimalField(decimal_places=2, max_digits=8)),
                ('charge_prt', models.DecimalField(decimal_places=2, max_digits=8)),
                ('chaffaure', models.DecimalField(decimal_places=2, max_digits=8)),
                ('proprietaire', models.DecimalField(decimal_places=2, max_digits=8)),
            ],
        ),
    ]
