import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarNuevoPage } from './agregarnuevo.page';

describe('AgregarnuevoPage', () => {
  let component: AgregarNuevoPage;
  let fixture: ComponentFixture<AgregarNuevoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
