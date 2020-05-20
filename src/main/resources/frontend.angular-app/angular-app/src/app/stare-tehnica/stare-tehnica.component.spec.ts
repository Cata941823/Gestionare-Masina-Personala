import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StareTehnicaComponent } from './stare-tehnica.component';

describe('StareTehnicaComponent', () => {
  let component: StareTehnicaComponent;
  let fixture: ComponentFixture<StareTehnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StareTehnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StareTehnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
