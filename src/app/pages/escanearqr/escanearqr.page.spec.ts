import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanearqrPage } from './escanearqr.page';

describe('EscanearqrPage', () => {
  let component: EscanearqrPage;
  let fixture: ComponentFixture<EscanearqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanearqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
