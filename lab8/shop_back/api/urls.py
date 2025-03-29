from django.urls import path

from . import views

urlpatterns = [
    # ex: /api/
    
    # products
    path("products", views.product_list, name="product_list"),
    path("products/<int:id>", views.product_detail, name="product_detail"),
    
    # categories
    path("categories", views.category_list, name="category-list"),
    path("categories/<int:id>", views.category_detail, name="category-detail"),
    path("categories/<int:id>/products", views.category_products, name="category-products"),
]