import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private underMaintenanceRoutes: Set<string> = new Set(['/prestasi', '/peserta', '/pengumuman']);

  constructor(private router: Router) { }

  isUnderMaintenance(route: string): boolean {
    return this.underMaintenanceRoutes.has(route);
  }

  redirectToMaintenanceIfNeeded(route: string): void {
    if (this.isUnderMaintenance(route)) {
      this.router.navigate(['/maintenance']);
    }
  }
}
