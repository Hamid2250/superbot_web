from django.shortcuts import render

# Create your views here.
def start_command(request):
    return render(request,"start.html")
