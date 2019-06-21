import { TestBed } from '@angular/core/testing';

import { EventRegServiceService } from './event-reg-service.service';

describe('EventRegServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventRegServiceService = TestBed.get(EventRegServiceService);
    expect(service).toBeTruthy();
  });
});
