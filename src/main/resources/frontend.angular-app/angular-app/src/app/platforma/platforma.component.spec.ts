import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformaComponent } from './platforma.component';

describe('PlatformaComponent', () => {
  let component: PlatformaComponent;
  let fixture: ComponentFixture<PlatformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
