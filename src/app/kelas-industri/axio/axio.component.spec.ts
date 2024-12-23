import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxioComponent } from './axio.component';

describe('AxioComponent', () => {
  let component: AxioComponent;
  let fixture: ComponentFixture<AxioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
