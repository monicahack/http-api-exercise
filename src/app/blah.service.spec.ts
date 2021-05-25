import { TestBed } from '@angular/core/testing';

import { BlahService } from './blah.service';

describe('BlahService', () => {
  let service: BlahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
