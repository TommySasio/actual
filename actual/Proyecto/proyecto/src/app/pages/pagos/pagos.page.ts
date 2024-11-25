import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonSelect, IonSelectOption, IonInput, IonDatetime } 
from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButton, IonSelect, IonSelectOption, 
    IonInput, IonDatetime, 
    CommonModule, FormsModule
  ]
})
export class PagosPage implements OnInit {
  
  @ViewChild('datetimePicker') datetimePicker?: IonDatetime;  // Controla el ion-datetime como referencia
  calendarVisible: boolean = false;  // Muestra u oculta el calendario
  formattedExpiryDate: string = '';  // Guarda la fecha de vencimiento
  yapeVisible: boolean = false;  // Controla la visibilidad de la sección de Yape

  constructor() {}

  ngOnInit() {}

  toggleCalendar() { // Alterna la visibilidad del calendario
    this.calendarVisible = !this.calendarVisible;
  }

  onDateSelected(event: any) { // Actualiza y formatea la fecha de vencimiento
    const date = new Date(event.detail.value);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    this.formattedExpiryDate = `${month}/${year}`;
    this.toggleCalendar(); 
  }

  onPaymentMethodChange(event: any) { // Cambia la visibilidad de Yape según el método de pago
    this.yapeVisible = event.detail.value === 'yape';
  }

  onSubmit(event: Event) { // Maneja el envío del formulario de pago
    event.preventDefault();

    const paymentMethod = (document.getElementById('payment-method') as HTMLSelectElement).value;

    if (paymentMethod === 'yape') {
      alert('Por favor, escanea el código QR para completar el pago con Yape.');
    } else {
      alert('Pago procesado exitosamente con tarjeta.');
    }
  }
}
