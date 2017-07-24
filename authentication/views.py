# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
   return render(request,'index.html')

def board(request):
   return render(request,'board.html')

def save(request):
  if request.is_ajax():
    if request.method=='GET':
      user=profile.objects.get(id=request.GET.get('userid'))
      user.score=request.GET.get('total')
      user.save()
      return HttpResponse("%s" %user.score)
      
      
