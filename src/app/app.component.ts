import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Adjust the scroll threshold as needed (e.g., 50 pixels)
    this.isScrolled = window.scrollY > 50;
  }
}