import { TestBed, inject } from '@angular/core/testing';

import { AllThroughputService } from './all-throughput.service';

describe('AllThroughputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllThroughputService]
    });
  });

  it('should be created', inject([AllThroughputService], (service: AllThroughputService) => {
    expect(service).toBeTruthy();
  }));
});
