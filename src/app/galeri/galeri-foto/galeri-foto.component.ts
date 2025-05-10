import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeri-foto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './galeri-foto.component.html',
  styleUrl: './galeri-foto.component.css'
})
export class GaleriFotoComponent {
  isScrolled = signal(false);

  activeContent: string = 'semua';  // Default section
  showContent(section: string): void {
    this.activeContent = section;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}