import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMasiniComponent } from './lista-masini.component';

describe('ListaMasiniComponent', () => {
  let component: ListaMasiniComponent;
  let fixture: ComponentFixture<ListaMasiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMasiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMasiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
