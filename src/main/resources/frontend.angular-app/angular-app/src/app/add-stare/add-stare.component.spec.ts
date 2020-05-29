import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStareComponent } from './add-stare.component';

describe('AddStareComponent', () => {
  let component: AddStareComponent;
  let fixture: ComponentFixture<AddStareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
