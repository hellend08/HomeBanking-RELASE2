import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersDashboardComponent } from './transfers-dashboard.component';

describe('TransfersDashboardComponent', () => {
  let component: TransfersDashboardComponent;
  let fixture: ComponentFixture<TransfersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfersDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
