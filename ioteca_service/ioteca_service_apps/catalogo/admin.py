from django.contrib import admin
from .models import Categoria
from .models import Autor
from .models import Libro
# Register your models here.

admin.site.register(Categoria)
admin.site.register(Autor)


class LibroAdmin(admin.ModelAdmin):
    list_display = ("nombre", "tipo", "categoria", "updated_at")
    search_fields = ("nombre", "tipo", "categoria__nombre")

admin.site.register(Libro, LibroAdmin)
