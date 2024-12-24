import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriFotoComponent } from './galeri-foto.component';

describe('GaleriFotoComponent', () => {
  let component: GaleriFotoComponent;
  let fixture: ComponentFixture<GaleriFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
