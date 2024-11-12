import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarAsistenciaPage } from './confirm-asistencia.page';

describe('ConfirmAsistenciaPage', () => {
  let component: ConfirmarAsistenciaPage;
  let fixture: ComponentFixture<ConfirmarAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
