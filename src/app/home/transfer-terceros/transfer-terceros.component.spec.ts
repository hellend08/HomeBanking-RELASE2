import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTercerosComponent } from './transfer-terceros.component';

describe('TransferTercerosComponent', () => {
  let component: TransferTercerosComponent;
  let fixture: ComponentFixture<TransferTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferTercerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
