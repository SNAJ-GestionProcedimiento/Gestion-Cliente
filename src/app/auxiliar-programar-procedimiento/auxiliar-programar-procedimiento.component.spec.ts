import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarProgramarProcedimientoComponent } from './auxiliar-programar-procedimiento.component';

describe('AuxiliarProgramarProcedimientoComponent', () => {
  let component: AuxiliarProgramarProcedimientoComponent;
  let fixture: ComponentFixture<AuxiliarProgramarProcedimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliarProgramarProcedimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarProgramarProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
