import { TestBed } from '@angular/core/testing';

import { SharedMaterialService } from './shared-material.service';

describe('SharedMaterialService', () => {
  let service: SharedMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
