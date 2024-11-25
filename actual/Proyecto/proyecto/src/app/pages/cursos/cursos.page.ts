import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; // Importa RouterModule para habilitar routerLink

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule,
    RouterModule // Agrega RouterModule aquí para habilitar routerLink en el HTML
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permite el uso de componentes personalizados, como los de Ionic
})
export class CursosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
