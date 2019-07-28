import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHistorialMedicoComponent } from './crear-historial-medico.component';

describe('CrearHistorialMedicoComponent', () => {
  let component: CrearHistorialMedicoComponent;
  let fixture: ComponentFixture<CrearHistorialMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearHistorialMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHistorialMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
