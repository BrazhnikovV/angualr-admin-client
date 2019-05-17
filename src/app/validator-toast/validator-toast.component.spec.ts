import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorToastComponent } from './validator-toast.component';

describe('ValidatorToastComponent', () => {
  let component: ValidatorToastComponent;
  let fixture: ComponentFixture<ValidatorToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
