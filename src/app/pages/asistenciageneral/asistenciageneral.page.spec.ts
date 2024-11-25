import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciageneralPage } from './asistenciageneral.page';

describe('AsistenciageneralPage', () => {
  let component: AsistenciageneralPage;
  let fixture: ComponentFixture<AsistenciageneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciageneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
