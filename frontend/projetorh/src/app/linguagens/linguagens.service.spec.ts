import { TestBed } from '@angular/core/testing';

import { LinguagensService } from './linguagens.service';

describe('LinguagensService', () => {
  let service: LinguagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinguagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
