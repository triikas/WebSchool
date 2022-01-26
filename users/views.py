from django.shortcuts import render, redirect
from .forms import RegForm
# from .forms import AvtForm
from django.contrib.auth import views as vs
def main(request):
    pass
# варианты: авторизация/регистрация/ЛК в зависимости от ситуации

def reg(request):
    if request.method == "POST":
        form = RegForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = RegForm()
    return render(request, 'users/registration.html', {'form': form})

def avt(request):
    # if request.method == "POST":
    #     form = AvtForm(request.POST)
    #     if form.is_valid():
    #         return redirect('/')
    # else:
    #     form = AvtForm()
    form = vs.LoginView()
    return render(request, 'users/avt.html', {'form': form})

def lk(request):
    return render(request, 'users/lk.html')  # , {'form': form})