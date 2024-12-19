import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RplComponent } from './rpl.component';

describe('RplComponent', () => {
  let component: RplComponent;
  let fixture: ComponentFixture<RplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RplComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
