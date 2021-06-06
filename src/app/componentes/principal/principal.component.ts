import { Subject } from 'rxjs';
import { CuentaAtrasService } from 'src/app/services/cuenta-atras.service';
import { Component, OnInit } from '@angular/core';
import { PruebasResueltasService } from 'src/app/services/pruebas-resueltas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
  ]
})
export class PrincipalComponent implements OnInit {

  constructor(private cuentaAtras:CuentaAtrasService, private prueba:PruebasResueltasService ) {
    this.iniciado=this.cuentaAtras.getIniciado();
    // this.inicia.subscribe(respuesta=> {
    //   console.log("la respuesta del inicia", respuesta);
    //   this.iniciado=respuesta;
    // })
  }
  inicia: Subject<boolean>= new Subject<boolean>();
  numPrueba=0;
iniciado:boolean;
  ngOnInit(): void {
  }
  iniciar(){
    $('#botonIniciar').addClass('d-none');

    console.log("pulsado iniciar");
    if(!this.cuentaAtras.getReloj()){
        this.cuentaAtras.Relojito();
        console.log("relojito construido");
        this.iniciado=true;
        // this.inicia.next(this.iniciado);
      }else{
        (this.cuentaAtras.getIniciado()) ?console.log("el reloj ya estaba hecho") :  this.cuentaAtras.Relojito() ;
      }
  }

  prueba1(){
    this.prueba.numeroPrueba=1;
  }

  prueba2(){

  }

  prueba3(){

  }
}
