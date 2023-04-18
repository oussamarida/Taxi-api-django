from django.db import models




class taxiMo(models.Model):
    date=models.DateField(unique=True, null=False)
    reste_brut=models.DecimalField(max_digits=8, decimal_places=2)
    mnt_gasoil=models.DecimalField(max_digits=8, decimal_places=2)
    rectte_brute=models.DecimalField(max_digits=8, decimal_places=2)
    recette_net=models.DecimalField(max_digits=8, decimal_places=2)
    charge_chf=models.DecimalField(max_digits=8, decimal_places=2)
    charge_prt=models.DecimalField(max_digits=8, decimal_places=2)
    chaffaure=models.DecimalField(max_digits=8, decimal_places=2)
    proprietaire=models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
       return '{} {} {} {} {} {} {} {}'.format(self.date , self.reste_brut ,
                         self.mnt_gasoil, self.rectte_brute,self.recette_net,
                         self.charge_chf, self.charge_prt, 
                         self.chaffaure, self.proprietaire)