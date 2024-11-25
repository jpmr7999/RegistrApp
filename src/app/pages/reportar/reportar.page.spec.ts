import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportarPage } from './reportar.page';

describe('ReportarPage', () => {
  let component: ReportarPage;
  let fixture: ComponentFixture<ReportarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
