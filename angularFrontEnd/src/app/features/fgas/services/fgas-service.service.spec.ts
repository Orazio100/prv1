import { TestBed } from '@angular/core/testing';

import { FgasServiceService } from './fgas-service.service';

describe('FgasServiceService', () => {
  let service: FgasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FgasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
