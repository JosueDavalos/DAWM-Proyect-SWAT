import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-detalle-inline',
  templateUrl: './detalle-inline.component.html',
  styleUrls: ['./detalle-inline.component.css']
})
export class DetalleInlineComponent implements OnInit {
  @Input() mascota: Animal;
  constructor() { }

  adoptar(){
    
  }

  ngOnInit(): void {
  }

}
