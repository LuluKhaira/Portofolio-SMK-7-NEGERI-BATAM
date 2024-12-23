import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SejarahComponent } from './profile/sejarah/sejarah.component';
import { VisiMisiComponent } from './profile/visi-misi/visi-misi.component';
import { StrukturComponent } from './profile/struktur/struktur.component';
import { ProgramKerjaComponent } from './program/program-kerja/program-kerja.component';
import { HubunganIndustriComponent } from './program/hubungan-industri/hubungan-industri.component';
import { BusaKerjaKhususComponent } from './program/busa-kerja-khusus/busa-kerja-khusus.component';
import { KontakComponent } from './kontak/kontak.component';
import { BlogComponent } from './blog/blog.component';
import { BeritaSekolahComponent } from './berita/berita-sekolah/berita-sekolah.component';
import { LoginComponent } from './login/login.component';
import { DkvComponent } from './jurusan/dkv/dkv.component';
import { RplComponent } from './jurusan/rpl/rpl.component';
import { TitlComponent } from './jurusan/titl/titl.component';
import { TjatComponent } from './jurusan/tjat/tjat.component';
import { TkjComponent } from './jurusan/tkj/tkj.component';
import { InformasiGtkComponent } from './gtk/informasi-gtk/informasi-gtk.component';
import { InformasiSiswaComponent } from './gtk/informasi-siswa/informasi-siswa.component';
import { MikrotikComponent } from './program/kelas-industri/mikrotik/mikrotik.component';
<<<<<<< HEAD
import { AxiooComponent } from './program/kelas-industri/axioo/axioo.component'
import { InformasiPemetaanKelulusanComponent } from './informasi-pemetaan-kelulusan/informasi-pemetaan-kelulusan.component';
import { SarpasComponent } from './sarpas/sarpas.component'


=======
import { AxiooComponent } from './program/kelas-industri/axioo/axioo.component';
import { PrestasiComponent } from './gtk/prestasi/prestasi.component';
>>>>>>> b99f0f0f03e9a48e7389bb605f3930fcd29ffc0b

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sejarah', component: SejarahComponent },
    { path: 'visi-misi', component: VisiMisiComponent },
    { path: 'struktur', component: StrukturComponent },
    { path: 'program-kerja', component: ProgramKerjaComponent },
    { path: 'hubungan-industri', component: HubunganIndustriComponent },
    { path: 'busa-kerja-khusus', component: BusaKerjaKhususComponent },
    { path: 'kontak', component: KontakComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'berita-sekolah', component: BeritaSekolahComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dkv', component: DkvComponent },
    { path: 'rpl', component: RplComponent },
    { path: 'titl', component: TitlComponent },
    { path: 'tjat', component: TjatComponent },
    { path: 'tkj', component: TkjComponent },
    { path: 'informasi-gtk', component: InformasiGtkComponent },
    { path: 'axioo', component: AxiooComponent },
    { path: 'mikrotik', component: MikrotikComponent },
<<<<<<< HEAD
    { path: 'lulus', component: InformasiPemetaanKelulusanComponent },
    { path: 'informasi-siswa', component: InformasiSiswaComponent },
    { path: 'sarpas', component: SarpasComponent },

=======
    { path: 'prestasi', component: PrestasiComponent },
>>>>>>> b99f0f0f03e9a48e7389bb605f3930fcd29ffc0b
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
