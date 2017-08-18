"""game URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
#from . import views
from django.contrib import admin
#from django.contrib.auth import views as auth_views
from authentication import views 

urlpatterns = [
   
   url(r'^$',views.index,name='index'),
   url(r'^api/v1/', include('social_django.urls', namespace='social')),  
   url(r'^board/$',views.board,name='board'),
   url(r'^save/$',views.save,name='save'),
   url(r'^leaderboard/$',views.leaderboard,name='leaderboard'),
#   url(r'^logout/$',views.logout,name='logout'),
   url(r'^logout/$', views.logout, {'next_page': 'index'}, name='logout'),
   url(r'^admin/', admin.site.urls),
   #url(r'^accounts/'include('social.urls')),
   #url(r'^profile/'include('social.urls')),
 # url(r'$', views.index),
   # url('', views.index),

]
