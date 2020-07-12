import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesAdopcionComponent } from './solicitudes-adopcion.component';

describe('SolicitudesAdopcionComponent', () => {
  let component: SolicitudesAdopcionComponent;
  let fixture: ComponentFixture<SolicitudesAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
