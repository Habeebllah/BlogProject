from django.urls import path
from django.conf import settings
from django.contrib.staticfiles.urls import static
from app.views import Home
urlpatterns = [
    path('', Home, name='index'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)