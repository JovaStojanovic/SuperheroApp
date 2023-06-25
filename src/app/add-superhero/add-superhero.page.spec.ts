import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSuperheroPage } from './add-superhero.page';

describe('AddSuperheroPage', () => {
  let component: AddSuperheroPage;
  let fixture: ComponentFixture<AddSuperheroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSuperheroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
