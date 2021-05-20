import { Component, OnInit } from '@angular/core';
import { ErroresService } from 'src/app/services/errores.service';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styles: [
  ]
})
export class Prueba1Component implements OnInit {
  subida:boolean=true;
  constructor(private errorS:ErroresService) {
    console.log('en prueba 1')
  }

  ngOnInit() {
  }

  addError(){
    console.log("error añadido");
    console.log("antes de añadir hay ", this.errorS.getCantidadErrores()," errores");
    this.errorS.addError();
    console.log("antes de añadir hay ", this.errorS.getCantidadErrores()," errores");
  }

}
