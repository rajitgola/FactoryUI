import { TestBed, inject } from '@angular/core/testing';

import { AllFactoryServiceService } from './all-factory-service.service';

describe('AllFactoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllFactoryServiceService]
    });
  });

  it('should be created', inject([AllFactoryServiceService], (service: AllFactoryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
