import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelStareComponent } from './del-stare.component';

describe('DelStareComponent', () => {
  let component: DelStareComponent;
  let fixture: ComponentFixture<DelStareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelStareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelStareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
