import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrCodePage } from './qr-code.page';

describe('QrCodePage', () => {
  let component: QrCodePage;
  let fixture: ComponentFixture<QrCodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
