# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth import logout
from django.shortcuts import render
from django.contrib.auth.views import logout as contrib_logout


# Create your views here.
def index(request):
   return render(request,'index.html')


def board(request):
   return render(request,'board.html')

def save(request):
  print("anjali")
  if request.is_ajax():
    if request.method=='GET':
      user = User.objects.get(request.user)
      user.score=request.GET['score']
      user.save()
      return HttpResponse("%s" %user.score)
      
#def logout(request):
#   logout(request.user)
#   return render(request,'logout.html')


def logout(request, **kwargs):
  return contrib_logout(request, **kwargs)
