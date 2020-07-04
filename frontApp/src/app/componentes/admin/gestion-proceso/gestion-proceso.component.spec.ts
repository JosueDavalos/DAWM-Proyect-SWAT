import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProcesoComponent } from './gestion-proceso.component';

describe('GestionProcesoComponent', () => {
  let component: GestionProcesoComponent;
  let fixture: ComponentFixture<GestionProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
