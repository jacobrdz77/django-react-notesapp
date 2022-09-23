from django.contrib import admin
# If you want to see your models in the admin panel, you must register them here. Its totally optionaly though.

# Register your models here.

from .models import Note

admin.site.register(Note)