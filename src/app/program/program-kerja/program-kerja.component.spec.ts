import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramKerjaComponent } from './program-kerja.component';

describe('ProgramKerjaComponent', () => {
  let component: ProgramKerjaComponent;
  let fixture: ComponentFixture<ProgramKerjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramKerjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramKerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
