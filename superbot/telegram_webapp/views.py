from django.shortcuts import render

# Create your views here.
def start(request):
    return render(request,"start.html")

def new_order(request):
    return render(request,"new_order.html")