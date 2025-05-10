import { Component, OnInit } from '@angular/core';
import { FirestoreService, Achievement } from '../../services/firestore.service'; // Import Achievement interface
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
  styleUrls: ['./prestasi.component.css']
})
export class PrestasiComponent implements OnInit {

  achievements: Achievement[] = [];
  newAchievement: Achievement = { description: '', year: 0 };

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.fetchAchievements();
  }

  fetchAchievements(): void {
    this.firestoreService.getAchievements('achievements').subscribe({
      next: (data) => {
        console.log('Fetched achievements:', data);
        this.achievements = data;
      },
      error: (err) => {
        console.error('Error fetching achievements:', err);
      }
    });
  }

  addAchievement(): void {
    if (this.newAchievement.description && this.newAchievement.year) {
      this.firestoreService.addAchievement(this.newAchievement).then(() => {
        console.log('Achievement added successfully!');
        this.newAchievement = { description: '', year: 0 }; // Reset form
        this.fetchAchievements(); // Refresh the list after adding
      }).catch((err) => {
        console.error('Error adding achievement:', err);
      });
    } else {
      console.warn('Please fill out all fields before submitting.');
    }
  }
}
