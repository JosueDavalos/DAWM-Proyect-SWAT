import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-inline',
  templateUrl: './detalle-inline.component.html',
  styleUrls: ['./detalle-inline.component.css']
})
export class DetalleInlineComponent implements OnInit {
  @Input() mascota: Object;
  constructor() { }

  ngOnInit(): void {
  }

}
