import { TestBed } from '@angular/core/testing';

import { HotService } from './hot.service';

describe('HotService', () => {
  let service: HotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
