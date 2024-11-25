import { Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'certificacion',
    loadComponent: () =>
      import('./pages/certificacion/certificacion.page').then(
        (m) => m.CertificacionPage
      ),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'cursos',
    loadComponent: () =>
      import('./pages/cursos/cursos.page').then((m) => m.CursosPage),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'pagos',
    loadComponent: () =>
      import('./pages/pagos/pagos.page').then((m) => m.PagosPage),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./pages/registro/registro.page').then((m) => m.RegistroPage),
  },
  {
    path: 'suscripcion',
    loadComponent: () =>
      import('./pages/suscripcion/suscripcion.page').then(
        (m) => m.SuscripcionPage
      ),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'becas',
    loadComponent: () =>
      import('./pages/becas/becas.page').then((m) => m.BecasPage),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./pages/carrito/carrito.page').then((m) => m.CarritoPage),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'miscursos',
    loadComponent: () =>
      import('./pages/miscursos/miscursos.page').then((m) => m.MiscursosPage),
    canActivate: [AuthGuard], // Ruta protegida
  },
  {
    path: 'videos',
    loadComponent: () => import('./pages/Video_Cursos/videos.page').then( m => m.VideosPage)
  },
];
