# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
   return render(request,'index.html')

def board(request):
   return render(request,'board.html')

def save(request):
  print "anjali"
  if request.is_ajax():
    if request.method=='POST':
      user = User.objects.get(request.user)
      user.score=request.POST['score']
      user.save()
      return HttpResponse("%s" %user.score)
      
      
