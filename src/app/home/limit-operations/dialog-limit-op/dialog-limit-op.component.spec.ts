import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLimitOpComponent } from './dialog-limit-op.component';

describe('DialogLimitOpComponent', () => {
  let component: DialogLimitOpComponent;
  let fixture: ComponentFixture<DialogLimitOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLimitOpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLimitOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
