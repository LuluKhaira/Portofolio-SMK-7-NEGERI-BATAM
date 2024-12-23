import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-axioo',
  standalone: true,
  imports: [],
  templateUrl: './axioo.component.html',
  styleUrl: './axioo.component.css'
})
export class AxiooComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

}