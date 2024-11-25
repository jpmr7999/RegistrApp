import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListoPage } from './listo.page';

describe('ListoPage', () => {
  let component: ListoPage;
  let fixture: ComponentFixture<ListoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
