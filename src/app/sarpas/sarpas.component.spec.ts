import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarpasComponent } from './sarpas.component';

describe('SarpasComponent', () => {
  let component: SarpasComponent;
  let fixture: ComponentFixture<SarpasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SarpasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
