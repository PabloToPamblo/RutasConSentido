from django.db import models

class Achievement(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    points = models.IntegerField()
    image = models.ImageField(upload_to='achievements/', null=True, blank=True)

    def __str__(self):
        return self.title