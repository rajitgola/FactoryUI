import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFactoryComponent } from './all-factory.component';

describe('AllFactoryComponent', () => {
  let component: AllFactoryComponent;
  let fixture: ComponentFixture<AllFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
