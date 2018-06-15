import { TestBed, inject } from '@angular/core/testing';

import { IndexProdService } from './index-prod.service';

describe('IndexProdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexProdService]
    });
  });

  it('should be created', inject([IndexProdService], (service: IndexProdService) => {
    expect(service).toBeTruthy();
  }));
});
