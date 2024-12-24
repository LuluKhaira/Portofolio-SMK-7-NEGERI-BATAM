import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriVideoComponent } from './galeri-video.component';

describe('GaleriVideoComponent', () => {
  let component: GaleriVideoComponent;
  let fixture: ComponentFixture<GaleriVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
