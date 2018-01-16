import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryLandingComponent } from './factory-landing.component';

describe('FactoryLandingComponent', () => {
  let component: FactoryLandingComponent;
  let fixture: ComponentFixture<FactoryLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
