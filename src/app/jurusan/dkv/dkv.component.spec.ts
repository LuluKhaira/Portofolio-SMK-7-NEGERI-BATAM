import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkvComponent } from './dkv.component';

describe('DkvComponent', () => {
  let component: DkvComponent;
  let fixture: ComponentFixture<DkvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DkvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
