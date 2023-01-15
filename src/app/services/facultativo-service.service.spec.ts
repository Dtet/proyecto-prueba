import { TestBed } from '@angular/core/testing';

import { FacultativoServiceService } from './facultativo-service.service';

describe('FacultativoServiceService', () => {
  let service: FacultativoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultativoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
