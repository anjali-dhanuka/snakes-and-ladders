# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse

from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import logout
from django.shortcuts import render
from django.contrib.auth.views import logout as contrib_logout
from authentication.models import profile

# Create your views here.
def index(request):
   return render(request,'index.html')


def board(request):
   return render(request,'board.html')

def save(request):
  #print("anjali")
  if request.is_ajax():
    if request.method=='GET':
      try:
         u=profile.objects.get(user=request.user)
         #profile.objects.get(user=request.user).score+=request.GET['score'] 
      except ObjectDoesNotExist:
         u = None
      if u:
         #print "user exists"
         u.score=u.score+int(request.GET['score'])
         #print u.score
      else:
         u = profile(user=request.user,score=request.GET['score'])
         u.save()
      return HttpResponse("%s" %u.score)
      
#def logout(request):
#   logout(request.user)
#   return render(request,'logout.html')


def logout(request, **kwargs):
  return contrib_logout(request, **kwargs)
