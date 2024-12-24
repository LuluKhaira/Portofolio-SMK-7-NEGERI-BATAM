import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User, onAuthStateChanged } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth); // Inject Firebase Auth service

  constructor() {
    // You can listen to auth state changes (useful for real-time updates on user status)
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log('User logged in:', user);
      } else {
        console.log('User logged out');
      }
    });
  }

  // Sign up method
  async signUp(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Sign up successful');
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  }

  // Login method
  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful');
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  // Logout method
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Logout successful');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  // To check if a user is authenticated, use an observable to track the auth state
  isAuthenticated(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(user !== null);
      });
    });
  }

  // To get the current user (works with state changes)
  get currentUser(): Observable<User | null> {
    return new Observable<User | null>((observer) => {
      onAuthStateChanged(this.auth, (user) => {
        observer.next(user);
      });
    });
  }
}
