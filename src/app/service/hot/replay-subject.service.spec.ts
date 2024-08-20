import { TestBed } from '@angular/core/testing';
import { ReplaySubjectService } from './replay-subject.service';

describe('ReplaySubjectService', () => {
  let service: ReplaySubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaySubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
