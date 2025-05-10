import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-mikrotik',
  standalone: true,
  imports: [],
  templateUrl: './mikrotik.component.html',
  styleUrl: './mikrotik.component.css'
})
export class MikrotikComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

}