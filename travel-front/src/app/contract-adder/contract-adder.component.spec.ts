import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAdderComponent } from './contract-adder.component';

describe('ContractAdderComponent', () => {
  let component: ContractAdderComponent;
  let fixture: ComponentFixture<ContractAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
