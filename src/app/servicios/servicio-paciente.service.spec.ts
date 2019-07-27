import { TestBed } from '@angular/core/testing';

import { ServicioPacienteService } from './servicio-paciente.service';

describe('ServicioPacienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPacienteService = TestBed.get(ServicioPacienteService);
    expect(service).toBeTruthy();
  });
});
