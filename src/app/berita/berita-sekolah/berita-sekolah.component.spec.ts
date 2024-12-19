import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaSekolahComponent } from './berita-sekolah.component';

describe('BeritaSekolahComponent', () => {
  let component: BeritaSekolahComponent;
  let fixture: ComponentFixture<BeritaSekolahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeritaSekolahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeritaSekolahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
