import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logiObj: any = {
    EmailId: "",
    Password: ""
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.logiObj)
      .subscribe(
        (res: any) => {
          if (res.result) {
            alert("Login Success");
            localStorage.setItem('angular18Token', res.data.token);
            this.router.navigateByUrl('dashboard');
          } else {
            alert(res.message);
          }
        },
        (error) => {
          alert("An error occurred while logging in.");
          console.error(error);
        }
      );
  }
}