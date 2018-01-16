import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryThroughputComponent } from './factory-throughput.component';

describe('FactoryThroughputComponent', () => {
  let component: FactoryThroughputComponent;
  let fixture: ComponentFixture<FactoryThroughputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryThroughputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryThroughputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
