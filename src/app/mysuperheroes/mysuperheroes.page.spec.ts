import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { MysuperheroesPage } from './mysuperheroes.page';

describe('MysuperheroesPage', () => {
  let component: MysuperheroesPage;
  let fixture: ComponentFixture<MysuperheroesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MysuperheroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
