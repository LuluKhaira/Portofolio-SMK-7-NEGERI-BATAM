import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SejarahComponent } from './sejarah/sejarah.component';
import { VisiMisiComponent } from './visi-misi/visi-misi.component';
import { StrukturComponent } from './struktur/struktur.component';
import { ProgramKerjaComponent } from './program-kerja/program-kerja.component';
import { HubunganIndustriComponent } from './hubungan-industri/hubungan-industri.component';
import { BusaKerjaKhususComponent } from './busa-kerja-khusus/busa-kerja-khusus.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sejarah', component: SejarahComponent },
    { path: 'visi-misi', component: VisiMisiComponent },
    { path: 'struktur', component: StrukturComponent },
    { path: 'program-kerja', component: ProgramKerjaComponent },
    { path: 'hubungan-industri', component: HubunganIndustriComponent },
    { path: 'busa-kerja-khusus', component: BusaKerjaKhususComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
