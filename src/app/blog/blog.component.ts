import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  showFullDescription: boolean = false;

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  isScrolled = signal(false);
  activeContent: string = 'Semua';

  constructor(private router: Router) { }

  showContent(section: string): void {
    this.activeContent = section;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  navigateToFullDescription() {
    this.router.navigate(['/full-description']);
  }
}
