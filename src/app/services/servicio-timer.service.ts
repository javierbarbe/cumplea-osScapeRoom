import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTimerService {

  constructor() { }
  dias:number=0;
  horas:string='00';
  minutos:string='60';
  milisegundos:string;
  segundos:string='00';
fechaLimite:any='10 mayo 2022';
   miInterval= interval(1000);

   iniciaInterval=()=>{
    this.miInterval.subscribe(res=> {


      console.log("la res",res);
    this.fechaLimite=new Date(this.fechaLimite);
      let ahora= new Date(Date.now()).getTime();
      let tiempoRestante=this.fechaLimite-ahora;
      // console.log('fecha limite en milisegundos',fechaLimite);
      this.dias= Math.floor(tiempoRestante/ (1000*60*60*24));
      this.horas= ('0'+Math.floor(tiempoRestante% ((1000*60*60*24))/(1000*60*60))).slice(-2);
      // if(errores.length>0){
      // this.minutos =('0'+Math.floor(tiempoRestante% ((1000*60*60))/(1000*60)-errores.length)).slice(-2);
      // }else{
      //   this.minutos =('0'+Math.floor(tiempoRestante% ((1000*60*60))/(1000*60))).slice(-2);
      // }
      this.segundos = ('0'+Math.floor(tiempoRestante% ((1000*60))/(1000))).slice(-2);




    })
   }
}
