from django.db import models
from .enums import LIBRO_TIPO_CHOICES, FISICO

# Create your models here.


class Categoria(models.Model):

    nombre = models.CharField(max_length=60)
    codigo = models.CharField(max_length=60, null=True, blank=True)
    estado = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nombre


class Autor(models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.TextField(null=True, blank=True)
    fecha_nac = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Autor"
        verbose_name_plural = "Autores"

    def __str__(self):
        return self.nombre


class Libro(models.Model):
    nombre = models.CharField(max_length=50)
    categoria = models.ForeignKey(Categoria, null=True, blank=True)
    autors = models.ManyToManyField(Autor, blank=True)
    tipo = models.CharField(
        max_length=50, choices=LIBRO_TIPO_CHOICES, default=FISICO)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Libro"
        verbose_name_plural = "Libros"

    def __str__(self):
        return self.nombre
