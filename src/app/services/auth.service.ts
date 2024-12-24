import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth); // Inject Auth service

  async signUp(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Sign up successful');
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful');
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Logout successful');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  get isAuthenticated(): boolean {
    return this.auth.currentUser !== null;
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}
