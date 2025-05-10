import { Component, OnInit } from '@angular/core';
import { BeritaSekolahService } from '../../services/berita-sekolah.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-berita-sekolah',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './berita-sekolah.component.html',
    styleUrls: ['./berita-sekolah.component.css']
})
export class BeritaSekolahComponent implements OnInit {

    title = 'angular-firestore';
    myData: any[] = [];
    id: string | undefined;
    nama!: string;
    stok!: string;
    harga!: string;
    isEdit = false;

    constructor(private firestoreService: BeritaSekolahService) { }

    ngOnInit() {
        this.tampilData();
    }

    tampilData() {
        this.firestoreService.getCollection<any>('barang').subscribe(data => {
            this.myData = data;
        });
    }

    simpan() {
        if (!this.nama || !this.stok || !this.harga) {
            console.error('All fields are required');
            return;
        }

        const data = {
            namaBarang: this.nama,
            stokBarang: this.stok,
            hargaBarang: this.harga
        };
        this.firestoreService.addDocument('barang', data)
            .then(() => {
                console.log('Data added successfully');
                this.tampilData();
                this.reset();
            })
            .catch(err => console.error(err));
    }

    getEdit(arr: { id: string; namaBarang: string; stokBarang: string; hargaBarang: string }) {
        this.isEdit = true;
        this.id = arr.id;
        this.nama = arr.namaBarang;
        this.stok = arr.stokBarang;
        this.harga = arr.hargaBarang;
    }

    edit() {
        if (!this.id) return;
        const data = {
            namaBarang: this.nama,
            stokBarang: this.stok,
            hargaBarang: this.harga
        };
        this.firestoreService.updateDocument('barang', this.id, data)
            .then(() => {
                console.log('Data updated successfully');
                this.tampilData();
                this.reset();
            })
            .catch(err => console.error(err));
    }

    delete(arr: { id: string }) {
        this.firestoreService.deleteDocument('barang', arr.id)
            .then(() => {
                console.log('Data deleted successfully');
                this.tampilData();
                this.reset();
            })
            .catch(err => console.error(err));
    }

    reset() {
        this.isEdit = false;
        this.nama = '';
        this.stok = '';
        this.harga = '';
    }
}
