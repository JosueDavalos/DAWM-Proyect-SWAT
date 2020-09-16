import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAdopcionComponent } from './reporte-adopcion.component';

describe('ReporteAdopcionComponent', () => {
  let component: ReporteAdopcionComponent;
  let fixture: ComponentFixture<ReporteAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
