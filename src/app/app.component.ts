import { Component, HostListener } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaintenanceService } from './services/maintenance.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router, private maintenanceService: MaintenanceService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.maintenanceService.redirectToMaintenanceIfNeeded(event.url);
      }
    });
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}