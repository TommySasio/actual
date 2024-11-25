import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service'; // Ajusta la ruta al servicio
import { FirebaseError } from 'firebase/app'; // Importar FirebaseError para manejar errores

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    // Inicializa el formulario con validaciones
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6), // Validación de longitud mínima para Firebase Authentication
        ],
      ],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit() {}

  // Método para manejar el envío del formulario
  async onSubmit(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched(); // Marca todos los campos como "tocados" para mostrar errores
      alert('Por favor, complete todos los campos requeridos.');
      return;
    }

    const formData = this.registroForm.value;

    try {
      // Llamar al servicio para crear el usuario
      await this.userService.createUser(formData);
      alert('¡Registro exitoso!');
      this.router.navigate(['/login']); // Redirige al login después de registrar
    } catch (error) {
      console.error('Error en el registro:', error);

      // Manejo de errores específicos de Firebase Authentication
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          alert('El correo electrónico ya está en uso.');
        } else if (error.code === 'auth/weak-password') {
          alert('La contraseña es demasiado débil.');
        } else {
          alert('Hubo un error al registrar el usuario. Por favor, intente de nuevo.');
        }
      } else {
        alert('Error inesperado. Por favor, intente de nuevo.');
      }
    }
  }

  // Getters para facilitar el acceso a los campos del formulario en el HTML
  get nombre() {
    return this.registroForm.get('nombre');
  }

  get apellido() {
    return this.registroForm.get('apellido');
  }

  get usuario() {
    return this.registroForm.get('usuario');
  }

  get email() {
    return this.registroForm.get('email');
  }

  get password() {
    return this.registroForm.get('password');
  }

  get fechaNacimiento() {
    return this.registroForm.get('fechaNacimiento');
  }

  get telefono() {
    return this.registroForm.get('telefono');
  }

  get direccion() {
    return this.registroForm.get('direccion');
  }
}
