import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, WithFieldValue, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeritaSekolahService {
  constructor(private firestore: Firestore) { }

  // Fetch all documents from a collection
  getCollection<T>(collectionName: string): Observable<T[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<T[]>;
  }

  // Add a new document to a collection
  addDocument<T extends WithFieldValue<DocumentData>>(collectionName: string, data: T): Promise<void> {
    const collectionRef = collection(this.firestore, collectionName);
    return addDoc(collectionRef, data).then(() => { });
  }

  // Update a document in a collection
  updateDocument<T extends Partial<WithFieldValue<DocumentData>>>(collectionName: string, id: string, data: T): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${id}`);
    return updateDoc(docRef, data);
  }

  // Delete a document from a collection
  deleteDocument(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${id}`);
    return deleteDoc(docRef);
  }
}
