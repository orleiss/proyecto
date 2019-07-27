import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRegistroMedicoComponent } from './crear-registro-medico.component';

describe('CrearRegistroMedicoComponent', () => {
  let component: CrearRegistroMedicoComponent;
  let fixture: ComponentFixture<CrearRegistroMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRegistroMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRegistroMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
