import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Define Achievement interface
export interface Achievement {
  id?: string;
  description: string;
  year: number;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) { }

  // Fetch achievements
  getAchievements(): Observable<Achievement[]> {
    const achievementsRef = collection(this.firestore, 'achievements');
    return collectionData(achievementsRef, { idField: 'id' }) as Observable<Achievement[]>;
  }

  // Add an achievement
  addAchievement(achievement: Achievement) {
    const achievementsRef = collection(this.firestore, 'achievements');
    return addDoc(achievementsRef, achievement);
  }
}
