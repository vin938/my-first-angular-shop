import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  cartCount = 0;
  totalPrice = 0;


  products = [
  {
    name: 'LV',
    price: 45000,
    available: true,
    category: 'Electronics',
    image: 'http://justinreed.com/cdn/shop/files/1_216d2f1a-c2a3-4b9c-8add-20ca6eb92a63.jpg?v=1707244836'
  },
  {
    name: 'Adidas',
    price: 15000,
    available: true,
    category: 'Electronics',
    image: 'https://cdna.lystit.com/photos/amazon/4de8458f/adidas-originals-Collegiate-Navy-Trefoil-Full-zip-Fleece-Hoodie.jpeg'
  },
  {
    name: 'Supreme',
    price: 2000,
    available: false,
    category: 'Accessories',
    image: 'https://i.pinimg.com/originals/c0/f2/df/c0f2dff566fa7efac1c082f95b427f87.png'
  }
];


  addToCart(product: any) {
  this.cartCount++;
  this.totalPrice += product.price;
  alert(product.name + ' added to cart!');
}

selectedCategory = 'All';


}
