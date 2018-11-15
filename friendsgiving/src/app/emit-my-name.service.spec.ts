import { TestBed } from '@angular/core/testing';

import { EmitMyNameService } from './emit-my-name.service';

describe('EmitMyNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmitMyNameService = TestBed.get(EmitMyNameService);
    expect(service).toBeTruthy();
  });
});
