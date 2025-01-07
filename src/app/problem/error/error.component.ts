import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  isMaintenanceMode: boolean = true;

  constructor(private router: Router) {
    if (this.isMaintenanceMode) {
      this.router.navigate(['/maintenance']);
    }
  }
}
