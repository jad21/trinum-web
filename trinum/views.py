from django.shortcuts import render

# Create your views here.


def get_frontend(request):
    return render(request, "index.html")
