import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelDocComponent } from './del-doc.component';

describe('DelDocComponent', () => {
  let component: DelDocComponent;
  let fixture: ComponentFixture<DelDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
