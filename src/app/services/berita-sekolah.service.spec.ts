import { TestBed } from '@angular/core/testing';

import { BeritaSekolahService } from '../services/berita-sekolah.service';

describe('BeritaSekolahService', () => {
  let service: BeritaSekolahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeritaSekolahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
