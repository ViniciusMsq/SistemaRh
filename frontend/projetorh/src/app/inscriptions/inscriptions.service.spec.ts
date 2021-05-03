import { TestBed } from '@angular/core/testing';

import { InscriptionsService } from './inscriptions.service';

describe('InscriptionsService', () => {
  let service: InscriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
