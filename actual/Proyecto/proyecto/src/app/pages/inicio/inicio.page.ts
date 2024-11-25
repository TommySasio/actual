import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonInput, IonIcon } from '@ionic/angular/standalone'; // Importa IonInput y IonIcon
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput, // Asegúrate de incluir IonInput aquí
    IonIcon,  // Asegúrate de incluir IonIcon aquí
    CommonModule,
    FormsModule,
    RouterModule, // Para usar routerLink
  ],
})
export class InicioPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
