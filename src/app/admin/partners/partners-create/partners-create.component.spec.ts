import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersCreateComponent } from './partners-create.component';

describe('PartnersCreateComponent', () => {
  let component: PartnersCreateComponent;
  let fixture: ComponentFixture<PartnersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
