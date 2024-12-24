import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth); // Inject Firebase Auth service

  // Sign up method
  async signUp(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Sign up successful');
    } catch (error: any) {
      console.error('Error during sign up:', error);
    }
  }

  // Login method
  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful');
    } catch (error: any) {
      // If the error is an instance of Error, throw the message from it
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
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
}
