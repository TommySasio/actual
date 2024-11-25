import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, RouterModule]
})
export class CarritoPage implements OnInit {
  cartItems = [
    { name: 'Curso de JavaScript', price: 50, quantity: 1, image: '/assets/imagenes/javascript.jpg' },
    { name: 'Curso de Desarrollo Web', price: 75, quantity: 1, image: '/assets/imagenes/desarrollo-movil.jpg' },
  ];
  

  constructor() { }

  ngOnInit() {}

  increaseQuantity(item: any) {
    item.quantity += 1;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
