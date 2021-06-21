import { TestBed } from '@angular/core/testing';

import { EmpUiService } from './emp-ui.service';

describe('EmpUiService', () => {
  let service: EmpUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
