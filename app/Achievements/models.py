from django.db import models

LEVEL_CHOICES = [
    ('beginner', 'Beginner'),        
    ('intermediate', 'Intermediate'), 
    ('advanced', 'Advanced'),         
]

class Achievement(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    points = models.IntegerField()
    image = models.URLField(max_length=500, blank=True, null=True)
    level = models.CharField(
        max_length=20,
        choices=LEVEL_CHOICES,
        default='beginner'  # ✅ Si no eliges, será beginner por defecto
    )

    def __str__(self):
        return self.title