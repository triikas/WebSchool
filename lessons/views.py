from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def lessons(request):
    return render(request, 'lessons/lessons.html')

def cssOb1(request):
    return render(request, 'lessons/cssOb1.html')

def cssOb2(request):
    return render(request, 'lessons/cssOb2.html')

def bootstrapOb(request):
    return render(request, 'lessons/bootstrapOb.html')

def htmlOb(request):
    return render(request, 'lessons/htmlOb.html')

def les1(request):
    return render(request, 'lessons/htmlOb/les-1.html')
def les2(request):
    return render(request, 'lessons/htmlOb/les-2.html')
def les3(request):
    return render(request, 'lessons/htmlOb/les-3.html')
def les4(request):
    return render(request, 'lessons/htmlOb/les-4.html')
def les5(request):
    return render(request, 'lessons/htmlOb/les-5.html')
def les6(request):
    return render(request, 'lessons/htmlOb/les-6.html')
def les7(request):
    return render(request, 'lessons/htmlOb/les-7.html')
def les8(request):
    return render(request, 'lessons/htmlOb/les-8.html')
def les9(request):
    return render(request, 'lessons/htmlOb/les-9.html')
def les10(request):
    return render(request, 'lessons/htmlOb/les-10.html')
def les11(request):
    return render(request, 'lessons/htmlOb/les-11.html')
def test1(request):
    return render(request, 'lessons/htmlOb/test-1.html')
def test2(request):
    return render(request, 'lessons/htmlOb/test-2.html')
def test3(request):
    return render(request, 'lessons/htmlOb/test-3.html')
def pra(request):
    return render(request, 'lessons/htmlOb/practice.html')


def less1(request):
    return render(request, 'lessons/cssOb1/less-1.html')
def less2(request):
    return render(request, 'lessons/cssOb1/less-2.html')
def less3(request):
    return render(request, 'lessons/cssOb1/less-3.html')
def less4(request):
    return render(request, 'lessons/cssOb1/less-4.html')
def less5(request):
    return render(request, 'lessons/cssOb1/less-5.html')
def less6(request):
    return render(request, 'lessons/cssOb1/less-6.html')
def less7(request):
    return render(request, 'lessons/cssOb1/less-7.html')
def test11(request):
    return render(request, 'lessons/cssOb1/test-1.html')
def test22(request):
    return render(request, 'lessons/cssOb1/test-2.html')
def test33(request):
    return render(request, 'lessons/cssOb1/test-3.html')
def praCS(request):
    return render(request, 'lessons/cssOb1/practice.html')
