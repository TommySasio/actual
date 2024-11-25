import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule,
  ],
})
export class VideosPage implements OnInit {
  videos = [
    { src: 'assets/videos/video1.mp4' },
    { src: 'assets/videos/video2.mp4' },
    { src: 'assets/videos/video3.mp4' },
    { src: 'assets/videos/video4.mp4' },
    { src: 'assets/videos/video5.mp4' },
    { src: 'assets/videos/video6.mp4' },
  ];

  constructor() {}

  ngOnInit() {}
}
