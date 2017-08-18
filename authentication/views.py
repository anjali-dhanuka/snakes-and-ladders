# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse


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
  print("anjali")
  if request.is_ajax():
    if request.method=='GET':
      u = profile(user=request.user,score=request.GET['score'])
      u.save()
      return HttpResponse("%s" %user.score)
      
#def logout(request):
#   logout(request.user)
#   return render(request,'logout.html')


def logout(request, **kwargs):
  return contrib_logout(request, **kwargs)
