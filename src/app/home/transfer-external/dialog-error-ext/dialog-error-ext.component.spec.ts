import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogErrorExtComponent } from './dialog-error-ext.component';

describe('DialogErrorExtComponent', () => {
  let component: DialogErrorExtComponent;
  let fixture: ComponentFixture<DialogErrorExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogErrorExtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogErrorExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
