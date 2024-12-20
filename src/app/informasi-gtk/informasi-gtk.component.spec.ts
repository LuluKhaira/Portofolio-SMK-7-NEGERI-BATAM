import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiGtkComponent } from './informasi-gtk.component';

describe('InformasiGtkComponent', () => {
  let component: InformasiGtkComponent;
  let fixture: ComponentFixture<InformasiGtkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformasiGtkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformasiGtkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
