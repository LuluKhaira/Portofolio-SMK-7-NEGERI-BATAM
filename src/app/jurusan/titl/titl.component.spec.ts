import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlComponent } from './titl.component';

describe('TitlComponent', () => {
  let component: TitlComponent;
  let fixture: ComponentFixture<TitlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
