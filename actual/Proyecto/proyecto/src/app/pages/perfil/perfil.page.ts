import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonToggle,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonToggle,
    IonList,
    CommonModule,
    FormsModule,
  ],
})
export class PerfilPage implements OnInit {
  usuario = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '+1234567890',
    direccion: 'Calle Falsa 123, Ciudad, País',
    pais: 'Perú',
    ciudad: 'Lima',
    gustos: 'Tecnología, Programación, Música',
    redSocial: 'Facebook',
    suscripcion: true,
    metodoPago: 'Visa - **** 1234',
    certificados: ['Programación Básica', 'Desarrollo Web', 'JavaScript Avanzado'],
  };

  notificaciones = true;
  modoOscuro = false;

  constructor(private router: Router) {} // Inyección del servicio Router

  ngOnInit() {}

  editarPerfil() {
    alert('Función de editar perfil en desarrollo');
  }

  cerrarSesion() {
    // Redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }

  toggleModoOscuro() {
    document.body.classList.toggle('dark', this.modoOscuro);
  }

  cambiarSuscripcion() {
    this.usuario.suscripcion = !this.usuario.suscripcion;
    alert(this.usuario.suscripcion ? 'Suscripción activada' : 'Suscripción cancelada');
  }

  cambiarMetodoPago() {
    alert('Función de cambiar método de pago en desarrollo');
  }
}
