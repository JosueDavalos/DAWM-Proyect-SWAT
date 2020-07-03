import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonerAdopcionComponent } from './poner-adopcion.component';

describe('PonerAdopcionComponent', () => {
  let component: PonerAdopcionComponent;
  let fixture: ComponentFixture<PonerAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonerAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonerAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
