import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInlineComponent } from './detalle-inline.component';

describe('DetalleInlineComponent', () => {
  let component: DetalleInlineComponent;
  let fixture: ComponentFixture<DetalleInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
