import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikrotikComponent } from './mikrotik.component';

describe('MikrotikComponent', () => {
  let component: MikrotikComponent;
  let fixture: ComponentFixture<MikrotikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MikrotikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikrotikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
