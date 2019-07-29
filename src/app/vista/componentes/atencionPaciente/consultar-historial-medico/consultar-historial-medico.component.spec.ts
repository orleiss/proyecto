import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHistorialMedicoComponent } from './consultar-historial-medico.component';

describe('ConsultarHistorialMedicoComponent', () => {
  let component: ConsultarHistorialMedicoComponent;
  let fixture: ComponentFixture<ConsultarHistorialMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarHistorialMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHistorialMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
