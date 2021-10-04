import { TestBed } from '@angular/core/testing';

import { DdcService } from './ddc.service';

describe('DdcService', () => {
  let service: DdcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
