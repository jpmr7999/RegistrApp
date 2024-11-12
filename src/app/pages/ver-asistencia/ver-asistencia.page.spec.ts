import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAsistenciaPage } from './ver-asistencia.page';

describe('VerAsistenciaPage', () => {
  let component: VerAsistenciaPage;
  let fixture: ComponentFixture<VerAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
