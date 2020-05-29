import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMasinaComponent } from './add-masina.component';

describe('AddMasinaComponent', () => {
  let component: AddMasinaComponent;
  let fixture: ComponentFixture<AddMasinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMasinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMasinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
