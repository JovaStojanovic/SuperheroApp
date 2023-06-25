import { TestBed } from '@angular/core/testing';

import { SuperheroServiceService } from './superhero-service.service';

describe('SuperheroServiceService', () => {
  let service: SuperheroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
