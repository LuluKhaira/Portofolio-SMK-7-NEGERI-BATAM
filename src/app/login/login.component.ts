import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';  // Import Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  async login() {
    try {
      await this.authService.login(this.email, this.password);  // Call login from AuthService
      alert('Login successful!');
      this.router.navigate(['/home']);  // Redirect to home if login is successful
    } catch (error: any) {
      alert('Error during login: ' + error.message || 'An unknown error occurred');  // Show proper error message
    }
  }
}
