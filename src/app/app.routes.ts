import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SejarahComponent } from './sejarah/sejarah.component';
import { VisiMisiComponent } from './visi-misi/visi-misi.component';
import { StrukturComponent } from './struktur/struktur.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'sejarah', component: SejarahComponent },
    { path: 'visi-misi', component: VisiMisiComponent },
    { path: 'struktur', component: StrukturComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];
