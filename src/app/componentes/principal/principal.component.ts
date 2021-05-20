import { CuentaAtrasService } from 'src/app/services/cuenta-atras.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
  ]
})
export class PrincipalComponent implements OnInit {

  constructor(private cuentaAtras:CuentaAtrasService) {
    this.iniciado=this.cuentaAtras.getIniciado();
  }
iniciado:boolean;
  ngOnInit(): void {
  }
  iniciar(){
    console.log("pulsado iniciar");
    if(!this.cuentaAtras.getReloj()){
        this.cuentaAtras.Relojito();
        console.log("relojito construido");
    this.iniciado=true;

      }else{



        (this.cuentaAtras.getIniciado()) ?console.log("el reloj ya estaba hecho") :  this.cuentaAtras.Relojito() ;
      }
  }


}
