from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/detail/<int:pk>/", views.NoteDetail.as_view(), name="note-detail"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="note-destroy"),
]