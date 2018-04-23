import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AñadirComponent } from './añadir.component';

describe('AñadirComponent', () => {
  let component: AñadirComponent;
  let fixture: ComponentFixture<AñadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AñadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AñadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
