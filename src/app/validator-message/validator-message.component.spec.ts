import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorMessageComponent } from './validator-message.component';

describe('ValidatorMessageComponent', () => {
  let component: ValidatorMessageComponent;
  let fixture: ComponentFixture<ValidatorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
