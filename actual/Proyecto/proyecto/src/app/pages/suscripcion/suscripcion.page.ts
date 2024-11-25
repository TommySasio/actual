// Importa módulos necesarios para el componente y funcionalidades de Ionic, Angular y enrutamiento
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-suscripcion', // Define el selector del componente
  templateUrl: './suscripcion.page.html', // Ruta al archivo HTML del componente
  styleUrls: ['./suscripcion.page.scss'], // Ruta al archivo de estilos SCSS del componente
  standalone: true, // Define el componente como autónomo
  imports: [
    // Importa módulos y componentes necesarios para HTML y estilos
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard,
    IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    CommonModule, FormsModule, RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permite el uso de componentes personalizados
})
export class SuscripcionPage implements OnInit {

  activeDropdown: string | null = null; // Propiedad para controlar qué menú desplegable está activo

  constructor() {}

  ngOnInit() {
    this.initToggleButtons(); // Inicializa los botones de alternancia
  }

  // Controla el despliegue de información adicional por cada plan (relacionado con el HTML, *ngIf)
  toggleDropdown(plan: string) {
    // Alterna entre abrir/cerrar el menú desplegable del plan seleccionado
    this.activeDropdown = this.activeDropdown === plan ? null : plan;
  }

  // Añade funcionalidad a los botones de alternancia
  initToggleButtons() {
    const toggleButtons = document.querySelectorAll('.toggle-button'); // Selecciona todos los botones de alternancia
    toggleButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        toggleButtons.forEach(btn => btn.classList.remove('active')); // Quita la clase 'active' de todos los botones
        (event.currentTarget as HTMLElement).classList.add('active'); // Añade 'active' al botón clicado
      });
    });
  }
}
