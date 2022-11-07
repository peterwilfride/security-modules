import { TestBed } from '@angular/core/testing';

import { RedirectServiceService } from './redirect-service.service';

describe('RedirectServiceService', () => {
  let service: RedirectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
