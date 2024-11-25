import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
    RouterModule, // Necesario para que routerLink funcione correctamente
  ],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async onSubmit(event: Event) {
    event.preventDefault();

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      alert('Por favor, complete todos los campos requeridos.');
      return;
    }

    const { email, password } = this.loginForm.value;

    try {
      await this.userService.login(email, password);
      alert('¡Inicio de sesión exitoso!');
      this.router.navigate(['/inicio']);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Correo o contraseña incorrectos.');
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
