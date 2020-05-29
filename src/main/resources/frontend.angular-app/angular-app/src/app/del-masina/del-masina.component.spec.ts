import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelMasinaComponent } from './del-masina.component';

describe('DelMasinaComponent', () => {
  let component: DelMasinaComponent;
  let fixture: ComponentFixture<DelMasinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelMasinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelMasinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
