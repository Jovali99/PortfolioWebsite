import { TestBed } from '@angular/core/testing';

import { ExternalLinksServiceService } from './external-links-service.service';

describe('ExternalLinksServiceService', () => {
  let service: ExternalLinksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalLinksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
