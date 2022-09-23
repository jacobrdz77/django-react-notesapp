from rest_framework.serializers import ModelSerializer
from .models import Note

# Serializers turn a python object into JSON.
class NoteSerializers(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
    