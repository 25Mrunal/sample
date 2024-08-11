import { TestBed } from '@angular/core/testing';

import { ServiceactivatRouteService } from './serviceactivat-route.service';

describe('ServiceactivatRouteService', () => {
  let service: ServiceactivatRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceactivatRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
