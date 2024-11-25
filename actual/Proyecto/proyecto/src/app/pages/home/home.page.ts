import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; // Importa RouterModule para usar routerLink

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    CommonModule,
    FormsModule,
    RouterModule // Agrega RouterModule aquí para que reconozca routerLink
  ]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {}

}
