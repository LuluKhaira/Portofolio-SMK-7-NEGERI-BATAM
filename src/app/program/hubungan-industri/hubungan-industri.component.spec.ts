import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubunganIndustriComponent } from './hubungan-industri.component';

describe('HubunganIndustriComponent', () => {
  let component: HubunganIndustriComponent;
  let fixture: ComponentFixture<HubunganIndustriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubunganIndustriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubunganIndustriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
