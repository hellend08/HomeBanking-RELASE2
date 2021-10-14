import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActTokenComponent } from './act-token.component';

describe('ActTokenComponent', () => {
  let component: ActTokenComponent;
  let fixture: ComponentFixture<ActTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
