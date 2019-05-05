import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorNetworkComponent } from './validator-network.component';

describe('ValidatorNetworkComponent', () => {
  let component: ValidatorNetworkComponent;
  let fixture: ComponentFixture<ValidatorNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
