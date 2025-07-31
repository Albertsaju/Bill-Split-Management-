from django.db import models

# Create your models here.


class BaseMode(models.Model):
    name = models.CharField(max_length=24)
    amount = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}----> {self.amount}----> {self.created_at}"
    
