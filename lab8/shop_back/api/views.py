from django.forms import model_to_dict
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category


# Products 
def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse({'products': products})

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(model_to_dict(product))


# Categories
def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse({'categories': categories})

def category_detail(request, id):
    categories = get_object_or_404(Category, id=id)
    return JsonResponse(model_to_dict(categories))
    
def category_products(request, id):
    category = get_object_or_404(Category, id=id) 
    products = Product.objects.filter(category=category)  
    return JsonResponse(list(products.values()), safe=False)


