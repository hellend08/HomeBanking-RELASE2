import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInternalComponent } from './transfer-internal.component';

describe('TransferInternalComponent', () => {
  let component: TransferInternalComponent;
  let fixture: ComponentFixture<TransferInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
