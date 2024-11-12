import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FechaAsistenciaPage } from './fecha-asistencia.page';

describe('FechaAsistenciaPage', () => {
  let component: FechaAsistenciaPage;
  let fixture: ComponentFixture<FechaAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
