import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguPage } from './configu.page';

describe('ConfiguPage', () => {
  let component: ConfiguPage;
  let fixture: ComponentFixture<ConfiguPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
