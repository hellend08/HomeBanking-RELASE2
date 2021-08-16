import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitOperationsComponent } from './limit-operations.component';

describe('LimitOperationsComponent', () => {
  let component: LimitOperationsComponent;
  let fixture: ComponentFixture<LimitOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
