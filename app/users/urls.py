from django.urls import path
from .views import UserProfileView, UserProfileUpdateView, UserListView

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('update/', UserProfileUpdateView.as_view(), name='user-update'),
    path('list/', UserListView.as_view(), name='user-list'),
]