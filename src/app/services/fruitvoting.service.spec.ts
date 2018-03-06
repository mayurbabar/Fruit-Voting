import { TestBed, inject } from '@angular/core/testing';

import { FruitvotingService } from './fruitvoting.service';

describe('FruitvotingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitvotingService]
    });
  });

  it('should be created', inject([FruitvotingService], (service: FruitvotingService) => {
    expect(service).toBeTruthy();
  }));
});
