import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isScrolled = signal(false);
  activeContent: string = 'identitas';

  showContent(section: string): void {
    this.activeContent = section;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  schoolData = {
    accreditation: 'A',
    curriculum: 'Kurikulum Merdeka',
    npsn: '69774885',
    status: 'Negeri',
    educationType: 'SMK',
    ownership: 'Pemerintah Daerah',
    establishmentSK: 'KPTS.367/HK/IX/2014',
    establishmentDate: '2014-09-05',
    operationalSK: 'KPTS.367/HK/IX/2014',
    operationalDate: '2015-10-23'
  };

  shoolContact = {
    address: 'Perum Sekawan Pemko',
    head: '3 / 41',
    hamlet: 'Belian',
    ward: 'Belian',
    subdistrict: 'Batam Kota',
    regency: 'Batam',
    province: 'Kepulauan Riau',
    code: '29463',
    latitude: '1 / 104'
  };

  schoolAvailable = {
    electricity: 'PLN',
    electric: '10500',
    speed: '500 Mb',
    status: 'Bersedia Menerima',
    time: '-',
    certificate: 'Belum Bersertifikat',
  };

  videoURL = 'https://www.youtube.com/embed/[VideoID]';
}
