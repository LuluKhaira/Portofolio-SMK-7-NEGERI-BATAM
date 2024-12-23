import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiSiswaComponent } from './informasi-siswa.component';

describe('InformasiSiswaComponent', () => {
  let component: InformasiSiswaComponent;
  let fixture: ComponentFixture<InformasiSiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformasiSiswaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiSiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
