import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPrincipalPage } from './alumnoprincipal.page';

describe('AlumnoprincipalPage', () => {
  let component: AlumnoPrincipalPage;
  let fixture: ComponentFixture<AlumnoPrincipalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
