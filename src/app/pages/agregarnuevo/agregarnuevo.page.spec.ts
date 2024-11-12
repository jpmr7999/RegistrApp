import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarnuevoPage } from './agregarnuevo.page';

describe('AgregarnuevoPage', () => {
  let component: AgregarnuevoPage;
  let fixture: ComponentFixture<AgregarnuevoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarnuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
