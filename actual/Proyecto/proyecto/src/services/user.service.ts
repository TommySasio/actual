import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { authState } from 'rxfire/auth';
import { Observable } from 'rxjs';
import { FirebaseError } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$: Observable<User | null>; // Observable para el estado del usuario autenticado

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {
    this.user$ = authState(this.auth); // Escucha los cambios en el estado del usuario autenticado
  }

  // Crear usuario en Firebase Authentication y guardar datos en Firestore
  async createUser(data: any): Promise<void> {
    const { email, password, ...userData } = data;

    try {
      // Crear usuario en Authentication
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

      // Guardar información adicional en Firestore
      const userRef = doc(this.firestore, `usuarios/${userCredential.user.uid}`);
      await setDoc(userRef, userData);

      console.log('Usuario registrado correctamente en Firebase Authentication y Firestore.');
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Manejar errores específicos de Firebase
        if (error.code === 'auth/email-already-in-use') {
          throw new Error('El correo electrónico ya está en uso.');
        } else if (error.code === 'auth/weak-password') {
          throw new Error('La contraseña es demasiado débil.');
        }
      }
      console.error('Error al registrar el usuario:', error);
      throw new Error('Hubo un error al registrar el usuario. Por favor, intente de nuevo.');
    }
  }

  // Iniciar sesión con Firebase Authentication
  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Inicio de sesión exitoso.');
      this.router.navigate(['/inicio']); // Redirige al inicio después de iniciar sesión
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/user-not-found') {
          throw new Error('No existe una cuenta con este correo electrónico.');
        } else if (error.code === 'auth/wrong-password') {
          throw new Error('Contraseña incorrecta.');
        }
      }
      console.error('Error al iniciar sesión:', error);
      throw new Error('Hubo un error al iniciar sesión. Por favor, intente de nuevo.');
    }
  }

  // Cerrar sesión
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Cierre de sesión exitoso.');
      this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw new Error('Hubo un error al cerrar sesión. Por favor, intente de nuevo.');
    }
  }

  // Leer datos de un usuario en Firestore
  async getUser(userId: string): Promise<any> {
    try {
      const userRef = doc(this.firestore, `usuarios/${userId}`);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        console.log('Datos del usuario obtenidos:', userDoc.data());
        return userDoc.data();
      } else {
        throw new Error('Usuario no encontrado.');
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      throw new Error('Hubo un error al obtener los datos del usuario.');
    }
  }

  // Actualizar datos de un usuario en Firestore
  async updateUser(userId: string, updatedData: any): Promise<void> {
    try {
      const userRef = doc(this.firestore, `usuarios/${userId}`);
      await updateDoc(userRef, updatedData);

      console.log('Datos del usuario actualizados correctamente.');
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
      throw new Error('Hubo un error al actualizar los datos del usuario.');
    }
  }

  // Eliminar un usuario de Firestore
  async deleteUser(userId: string): Promise<void> {
    try {
      const userRef = doc(this.firestore, `usuarios/${userId}`);
      await deleteDoc(userRef);

      console.log('Usuario eliminado correctamente.');
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw new Error('Hubo un error al eliminar el usuario.');
    }
  }

  // Verificar si un usuario está autenticado
  isAuthenticated(): Observable<User | null> {
    return this.user$; // Devuelve el estado del usuario como un observable
  }
}
