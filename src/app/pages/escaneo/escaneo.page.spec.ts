import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscaneoPage } from './escaneo.page';

describe('EscaneoPage', () => {
  let component: EscaneoPage;
  let fixture: ComponentFixture<EscaneoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
