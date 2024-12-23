import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) { }

  // Fetch achievements
  getAchievements(): Observable<any[]> {
    const achievementsRef = collection(this.firestore, 'achievements');
    return collectionData(achievementsRef, { idField: 'id' });
  }

  // Add an achievement
  addAchievement(achievement: { description: string; year: number }) {
    const achievementsRef = collection(this.firestore, 'achievements');
    return addDoc(achievementsRef, achievement);
  }
}