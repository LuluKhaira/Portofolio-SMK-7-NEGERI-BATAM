import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusaKerjaKhususComponent } from './busa-kerja-khusus.component';

describe('BusaKerjaKhususComponent', () => {
  let component: BusaKerjaKhususComponent;
  let fixture: ComponentFixture<BusaKerjaKhususComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusaKerjaKhususComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusaKerjaKhususComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
