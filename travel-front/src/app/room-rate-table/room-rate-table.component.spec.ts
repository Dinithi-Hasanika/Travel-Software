import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRateTableComponent } from './room-rate-table.component';

describe('RoomRateTableComponent', () => {
  let component: RoomRateTableComponent;
  let fixture: ComponentFixture<RoomRateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomRateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
