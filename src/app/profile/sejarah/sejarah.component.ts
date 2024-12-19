import { Component, HostListener, signal } from '@angular/core';


@Component({
  selector: 'app-sejarah',
  standalone: true,
  imports: [],
  templateUrl: './sejarah.component.html',
  styleUrl: './sejarah.component.css'
})
export class SejarahComponent {
    isScrolled = signal(false);
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isScrolled.set(window.scrollY > 50);
    }

}
