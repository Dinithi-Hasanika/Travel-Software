import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomNeedTableComponent } from './room-need-table.component';

describe('RoomNeedTableComponent', () => {
  let component: RoomNeedTableComponent;
  let fixture: ComponentFixture<RoomNeedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomNeedTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomNeedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
