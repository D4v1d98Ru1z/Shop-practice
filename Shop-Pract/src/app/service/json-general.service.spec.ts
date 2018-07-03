import { TestBed, inject } from '@angular/core/testing';

import { JsonGeneralService } from './json-general.service';

describe('JsonGeneralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonGeneralService]
    });
  });

  it('should be created', inject([JsonGeneralService], (service: JsonGeneralService) => {
    expect(service).toBeTruthy();
  }));
});
