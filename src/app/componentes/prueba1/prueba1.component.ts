import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    console.log('en prueba 1');
    this.inicializaPrueba();
  }
   public formPrueba1: FormGroup;

  ngOnInit() {
  }
inicializaPrueba(){
this.formPrueba1= new FormGroup({

"opcCheckBox_1": new FormControl("", [Validators.requiredTrue]),
"opcCheckBox_2": new FormControl("", [Validators.requiredTrue]),
"opcCheckBox_3": new FormControl("", ),
"opcCheckBox_4": new FormControl("", ),

})}

pausarMusicaFondo(){
  this.errorS.stopMusicaFondo();
}
reanudarMusicaFondo(){
  this.errorS.reproducirMusicaFondo();
}
add20errores(){
  this.errorS.add_n_errores(7);
}
  addError(){
    console.log("error añadido");
    console.log("antes de añadir hay ", this.errorS.getCantidadErrores()," errores");
    this.errorS.addError();
    console.log("antes de añadir hay ", this.errorS.getCantidadErrores()," errores");
  }
comprobar(){
  console.log(this.formPrueba1);

  console.log('el checkbox es falso',this.formPrueba1.controls['opcCheckBox_3'].value!=true);
}
}
