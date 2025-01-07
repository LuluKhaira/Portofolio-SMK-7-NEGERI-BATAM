import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-berita-sekolah',
  standalone: true,
  imports: [],
  templateUrl: './berita-sekolah.component.html',
  styleUrl: './berita-sekolah.component.css'
})
export class BeritaSekolahComponent {

  title = 'angular-firestore';
  myData: any[] = [];
  id: any;
  nama!: string;
  stok!: string;
  harga!: string;
  isEdit: boolean | undefined;
  
  constructor( private firestore: AngularFirestore ){
      this.tampilData();
  }

  tampilData() {
      let data = this.firestore.collection('barang');
      let dataTerbaru = data.valueChanges({ idField: 'id' });
      dataTerbaru.subscribe(ss => this.myData = ss);
      this.isEdit = false
  }

  simpan() {
      let data = {
          namaBarang: this.nama,
          stokBarang: this.stok,
          hargaBarang: this.harga
      }
      this.firestore.collection('barang')
      .add(data)
      .then(res => {
          console.log(res);
          this.tampilData();
          this.reset();
      })
      .catch(e => {
          console.log(e);
      })
  }

  getEdit(arr: { id: any; namaBarang: string; stokBarang: string; hargaBarang: string; }) {
      this.isEdit = true;
      this.id = arr.id;
      this.nama = arr.namaBarang;
      this.stok = arr.stokBarang;
      this.harga = arr.hargaBarang;
  }

  edit() {
      let data = {
          namaBarang: this.nama,
          stokBarang: this.stok,
          hargaBarang: this.harga
      }
      this.firestore.collection('barang')
      .doc(this.id)
      .update(data)
      .then(res => {
          console.log(res);
          this.tampilData();
          this.reset();
      })
      .catch(e => {
          console.log(e);
      })
  }

  delete(arr: { id: string | undefined; }) {
      this.firestore.collection('barang')
      .doc(arr.id)
      .delete()
      .then(res => {
          console.log(res);
          this.tampilData();
          this.reset();
      })
      .catch(e => {
          console.log(e);
      })
  }

  reset() {
      this.isEdit = false;
      this.nama = "";
      this.stok = "";
      this.harga = "";
  }
}