import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferExternalComponent } from './transfer-external.component';

describe('TransferExternalComponent', () => {
  let component: TransferExternalComponent;
  let fixture: ComponentFixture<TransferExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferExternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
