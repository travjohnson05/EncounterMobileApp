import { TestBed } from '@angular/core/testing';

import { StudentInfoServiceService } from './student-info-service.service';

describe('StudentInfoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentInfoServiceService = TestBed.get(StudentInfoServiceService);
    expect(service).toBeTruthy();
  });
});
