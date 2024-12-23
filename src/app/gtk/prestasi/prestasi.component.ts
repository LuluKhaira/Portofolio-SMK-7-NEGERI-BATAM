import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestasi',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './prestasi.component.html',
  styleUrl: './prestasi.component.css'
})
export class PrestasiComponent implements OnInit {
  achievements: any[] = [];
  newAchievement = { description: '', year: 0 };

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getAchievements().subscribe((data) => {
      this.achievements = data;
    });
  }

  addAchievement() {
    if (this.newAchievement.description && this.newAchievement.year) {
      this.firestoreService.addAchievement(this.newAchievement).then(() => {
        this.newAchievement = { description: '', year: 0 };
      });
    }
  }
}
