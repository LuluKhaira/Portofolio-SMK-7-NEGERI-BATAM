import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiPemetaanKelulusanComponent } from './informasi-pemetaan-kelulusan.component';

describe('InformasiPemetaanKelulusanComponent', () => {
  let component: InformasiPemetaanKelulusanComponent;
  let fixture: ComponentFixture<InformasiPemetaanKelulusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformasiPemetaanKelulusanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiPemetaanKelulusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
