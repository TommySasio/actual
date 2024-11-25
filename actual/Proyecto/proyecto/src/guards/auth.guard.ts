import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { authState } from 'rxfire/auth';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return authState(this.auth).pipe(
      take(1),
      map((user) => {
        if (user) {
          // Si el usuario está autenticado, permite el acceso
          return true;
        } else {
          // Si no está autenticado, redirige al login
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
