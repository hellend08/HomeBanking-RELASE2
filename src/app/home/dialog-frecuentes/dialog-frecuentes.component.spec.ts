import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFrecuentesComponent } from './dialog-frecuentes.component';

describe('DialogFrecuentesComponent', () => {
  let component: DialogFrecuentesComponent;
  let fixture: ComponentFixture<DialogFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFrecuentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
