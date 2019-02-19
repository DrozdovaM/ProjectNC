import { TestBed } from '@angular/core/testing';

import { InfoAboutStudentService } from './info-about-student.service';

describe('InfoAboutStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoAboutStudentService = TestBed.get(InfoAboutStudentService);
    expect(service).toBeTruthy();
  });
});
