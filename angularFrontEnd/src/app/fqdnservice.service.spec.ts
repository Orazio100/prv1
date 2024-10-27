import { TestBed } from '@angular/core/testing';

import { FQDNServiceService } from './fqdnservice.service';

describe('FQDNServiceService', () => {
  let service: FQDNServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FQDNServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
