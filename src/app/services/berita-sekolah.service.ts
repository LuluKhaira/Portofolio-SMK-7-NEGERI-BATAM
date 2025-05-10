import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, WithFieldValue, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BeritaSekolahService {
  constructor(private firestore: Firestore) { }

  getCollection<T>(collectionName: string): Observable<T[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
  }

  addDocument<T extends WithFieldValue<DocumentData>>(collectionName: string, data: T): Promise<DocumentReference<DocumentData>> {
    const collectionRef = collection(this.firestore, collectionName);
    return addDoc(collectionRef, data); // Returns the promise with DocumentReference
  }

  updateDocument<T extends Partial<WithFieldValue<DocumentData>>>(collectionName: string, id: string, data: T): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${id}`);
    return updateDoc(docRef, data);
  }

  deleteDocument(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${id}`);
    return deleteDoc(docRef);
  }
}
