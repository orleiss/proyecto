import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRegistroMedicoComponent } from './consultar-registro-medico.component';

describe('ConsultarRegistroMedicoComponent', () => {
  let component: ConsultarRegistroMedicoComponent;
  let fixture: ComponentFixture<ConsultarRegistroMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarRegistroMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarRegistroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
