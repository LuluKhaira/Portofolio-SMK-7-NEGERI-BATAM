import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiooComponent } from './axioo.component';

describe('AxiooComponent', () => {
  let component: AxiooComponent;
  let fixture: ComponentFixture<AxiooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxiooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxiooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
