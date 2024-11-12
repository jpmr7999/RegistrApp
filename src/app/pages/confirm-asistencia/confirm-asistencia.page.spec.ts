import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmAsistenciaPage } from './confirm-asistencia.page';

describe('ConfirmAsistenciaPage', () => {
  let component: ConfirmAsistenciaPage;
  let fixture: ComponentFixture<ConfirmAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
