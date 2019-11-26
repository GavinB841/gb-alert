import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbAlertsComponent } from './gb-alerts.component';

describe('GbAlertsComponent', () => {
  let component: GbAlertsComponent;
  let fixture: ComponentFixture<GbAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
