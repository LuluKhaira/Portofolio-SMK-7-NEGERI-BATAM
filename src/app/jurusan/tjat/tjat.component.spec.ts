import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjatComponent } from './tjat.component';

describe('TjatComponent', () => {
  let component: TjatComponent;
  let fixture: ComponentFixture<TjatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TjatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TjatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
