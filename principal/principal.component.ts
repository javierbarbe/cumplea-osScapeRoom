import { CuentaAtrasService } from './../../services/cuenta-atras.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
  ]
})
export class PrincipalComponent implements OnInit {

  constructor(private cuentaAtras:CuentaAtrasService) {
    console.log('el valor del tiempo actual secundero',this.tiempoActualSec);
    // if(this.tiempoActualSec==undefined){
    //   this.tiempoActual$.subscribe((res:number) => {
    //     this.tiempoActualSec=res;
    //   });
    // }

   }

  ngOnInit(): void {
// this.tiempoActualSec=0;
//     setInterval(()=>{
// console.log("intervalo intervaleando",this.tiempoActualSec);
// this.tiempoActualSec+=1;
// this.iniciado=true;
// // console.log(object);
//     },1000)
  }

  // 60 min 60 sec
   tiempoTotal:number = 60*60;
   tiempoActual$:Subject<number>=new Subject();
  tiempoActualSec:number;
  iniciado:boolean;

}
