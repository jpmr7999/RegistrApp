import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoPage } from './codigo.page';

describe('CodigoPage', () => {
  let component: CodigoPage;
  let fixture: ComponentFixture<CodigoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
