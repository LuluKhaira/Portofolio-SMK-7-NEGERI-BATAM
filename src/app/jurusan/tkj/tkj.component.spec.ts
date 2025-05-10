import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkjComponent } from './tkj.component';

describe('TkjComponent', () => {
  let component: TkjComponent;
  let fixture: ComponentFixture<TkjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TkjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TkjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
