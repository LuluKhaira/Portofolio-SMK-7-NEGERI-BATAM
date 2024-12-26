import { Firestore, collection, collectionData, query, addDoc, DocumentReference } from '@angular/fire/firestore'; // Add DocumentReference import
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

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
  getAchievements(collectionName: string): Observable<Achievement[]> {
    const achievementsRef = collection(this.firestore, collectionName); // Get the collection reference
    const achievementsQuery = query(achievementsRef); // Create a query from the collection reference
    return collectionData(achievementsQuery, { idField: 'id' }) as Observable<Achievement[]>; // Use the query here
  }

  // Add an achievement
  addAchievement(achievement: Achievement): Promise<DocumentReference> {
    const achievementsRef = collection(this.firestore, 'achievements');
    return addDoc(achievementsRef, achievement); // This returns a Promise<DocumentReference>
  }
}
