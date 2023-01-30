import { TestBed } from '@angular/core/testing';

import { ServicioapiService } from './servicioapi.service';

describe('ServicioapiService', () => {
  let service: ServicioapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
