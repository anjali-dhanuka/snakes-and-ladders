# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse

from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import logout
from django.shortcuts import render
from django.contrib.auth.views import logout as contrib_logout
from django.conf import settings
from django.shortcuts import redirect
from authentication.models import profile
from django.template import loader
#from django.contrib.auth.decorators import login_required
# Create your views here.
def index(request):
   return render(request,'index.html')



def board(request):
  if request.user.is_authenticated:
    return render(request,'board.html')
  else:
    return render(request,'index.html')

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
         print "user exists"
         t=u.score+int(request.GET['score'])
         u.score=t
         u.save()
         print u.score
      else:
         u = profile(user=request.user,score=request.GET['score'])
         u.save()
      return HttpResponse("%s" %u.score)
 
 #def leaderboard(request):
  #players=profile.objects.order_by('-score')
def leaderboard(request):
    players = profile.objects.order_by('-score')[:5]
    template = loader.get_template('leaderboard.html')
    context = {
        'players': players,
    }
    return HttpResponse(template.render(context, request))    
#def logout(request):
#   logout(request.user)
#   return render(request,'logout.html')


def logout(request, **kwargs):
  return contrib_logout(request, **kwargs)
