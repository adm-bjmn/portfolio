from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index/home.html')


def contact(request):
    if request.method == 'POST':
        name = request.POST['Name']
        email = request.POST['Email']
        message = request.POST['Message']
        return render(request, 'contact/contact.html', {'email': email})
    else:
        return render(request, 'contact/contact.html', {})