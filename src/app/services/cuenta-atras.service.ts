import { LocalStorageService } from './local-storage.service';
import { ErroresService } from './errores.service';
import { Subject } from 'rxjs';
import { IReloj } from './../models/reloj';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CuentaAtrasService {
d:any;
  constructor(private errorS: ErroresService,private  lstorage:LocalStorageService) {

  }


private reloj:IReloj = {
  hora:'',
  minuto:'',
  segundo:'',
  errores:0,
  milisegundo:'',
  imagenMinion:''
};
private reloj$: Subject <IReloj>= new Subject();
cronometro;
 tempoCaido;
 milisecundero;

   Relojito=()=>{
     var errores2 =[];
     this.d = document;
    //  debugger;
    // const relojLocalStorage:IReloj = this.lstorage.getLocalStorage('reloj');
    var fec = new Date(Date.now());

    //  if(relojLocalStorage){
    //   var _fechaLimite = this.lstorage.getLocalStorage('fechaLimite');
    //   fec = new Date(_fechaLimite);
    //   textoFecha= fec.toString();
    //   console.log("habia reloj en localStorage");
    //   arrayTextoFecha= textoFecha.split(':');
    //   debugger;
    //   var tiempoMinutos = Number(arrayTextoFecha[1])-relojLocalStorage.errores;

    //   textoFecha=arrayTextoFecha[0]+tiempoMinutos+arrayTextoFecha[2];
    // }else{

     console.log('los minutos actuales',fec.getMinutes())
     fec.setHours(fec.getHours()+1);
     var textoFecha = fec.toString();
   var arrayTextoFecha= textoFecha.split(':');
   console.log("la fehcha hecha string", textoFecha);
     this.lstorage.setLocalStorage('fechaLimite',fec);
     //todo COMPROBAR LA FECHA LÍMITE SETEADA
    console.log('la hora en formato date',fec);
    // console.log(typeof fec);

      console.log("no habia reloj en localstorage");
    // }
    console.log('la fecha hecha texto (array)',arrayTextoFecha);

    this.cuentaAtras(textoFecha);

  }

  cancelarTimeOut=()=>{
     clearInterval(this.tempoCaido);
     clearInterval(this.cronometro);
     clearInterval(this.milisecundero);
     //console.log("se ha cancelado this tempoCaido",this.tempoCaido);
     //console.log("se ha candelado this.milisecundero", this.milisecundero);
  }

  iniciado:boolean=false;
dias:number=0;
horas:string='00';
minutos:string='60';
milisegundos:string;
segundos:string='00';
imagenMinion:string='';
numeroMin;

   cuentaAtras =(fechaLimitePasada:string  ):IReloj=>{
    //  debugger;
  console.log("la fecha limite pasada sin nada en el storagae",fechaLimitePasada);
      let fechaLimite2 = new Date(fechaLimitePasada).getTime();


  //console.log('en la cuenta ATRAS============================================================================================================================================');
  // if(!this.iniciado){
    this.milisecundero= setInterval(()=>{
      let ahora= new Date(Date.now()).getTime();
      let tiempoRestante=fechaLimite2-ahora;
      // //console.log(tiempoRestante);
      this.milisegundos=('0'+Math.floor(tiempoRestante% ((1000*60*60*24)))).slice(-3);
    //  elementoMilisecundero.innerHTML=`${this.milisegundos}`;
    // if(this.lstorage.getLocalStorage('reloj')){
    //   this.reloj= {
    //     hora: this.horas,
    //     minuto:this.minutos,
    //     segundo: this.segundos,
    //     milisegundo: this.milisegundos,
    //     imagenMinion:this.imagenMinion,
    //     errores: this.lstorage.getLocalStorage('reloj').errores
    //   };
    // }else{
      this.reloj= {
        hora: this.horas,
        minuto:this.minutos,
        segundo: this.segundos,
        milisegundo: this.milisegundos,
        imagenMinion:this.imagenMinion,
        errores: this.errorS.getCantidadErrores()
      };
    // }

    this.reloj$.next(this.reloj);
    //console.log('this.milisecundero es ====================\n==================\n====================', this.milisecundero);

    },300);
    //console.log('this.milisecundero es ====================\n==================\n====================', this.milisegundos);
    //console.log(typeof this.milisegundos);
  // }
    //  })


     let fechaLimite = new Date(fechaLimitePasada).getTime();

        this.tempoCaido =setInterval(() => {
          let ahora= new Date(Date.now()).getTime();
          let tiempoRestante=fechaLimite2-ahora;


          let cantidadErrores=this.errorS.getCantidadErrores();
// debugger;
          this.numeroMin= parseInt(this.minutos);

console.log("la cantidad de errores es ", cantidadErrores);
//console.log('el numero de minuto',this.numeroMin, 'el numero de errores', cantidadErrores);
          //console.log(this.numeroMin);
          //debugger;
          if(this.numeroMin==0 && this.segundos=='00' ||this.numeroMin<0){
            this.minutos='00';
            this.segundos='00';
            this.milisegundos='000';
           this.cancelarTimeOut();
           this.iniciado=false;
           this.errorS.reproducirFinDeJuegoSonido();
           Swal.fire({
             icon:'error',
             text:'Fin de Juego',
             imageUrl:'../../assets/agnesTriste.jpg',
             showConfirmButton:false
           });
            // this.intervalSubs.unsubscribe();

          }else{


          //console.log('fecha limite en milisegundos',fechaLimite2);
          this.dias= Math.floor(tiempoRestante/ (1000*60*60*24));
          this.horas= ('0'+Math.floor(tiempoRestante% ((1000*60*60*24))/(1000*60*60))).slice(-2);
          this.minutos =('0'+Math.floor(tiempoRestante% ((1000*60*60))/(1000*60)-cantidadErrores)).slice(-2);
            // this.milisegundos=('0'+Math.floor(tiempoRestante)).slice(-3);

          //console.log(this.minutos);
          this.segundos = ('0'+Math.floor(tiempoRestante% ((1000*60))/(1000))).slice(-2);

          if(this.minutos<='60'){
            this.imagenMinion='../../assets/principal.jpg'
          }
          if(this.minutos<='50'){
            this.imagenMinion='../../assets/portada.jpg';
          }
          if(this.minutos<='40'){
            this.imagenMinion='../../assets/peleaMinionsPlatano.jpg';
          }
           if(this.minutos<='30'){
            this.imagenMinion='../../assets/minionmorado.jpg';
          }
          if(this.minutos<='20'){
            this.imagenMinion='../../assets/minionEnfadadoPersiguiendo.jpg';
          }

          if (this.minutos<'12'){
            this.imagenMinion='../../assets/botonPanico.jpg';
            //console.log("el tiempo pasa...");
          }else{
            //console.log("el tiempo pasa...")
            // this.imagenMinion='';
          }
          if(this.segundos<'40' && this.minutos<'42'){
            //console.log("menos de 40 segundos y 42 min");
            // elementoSecundero.innerHTML+=`<img src='../assets/minionmorado.jpg' width=40 height=40 alt='no se encuentra'>`
          }
         }
         //console.log("los minutos actuales", this.minutos);
         console.log("la imagen minion ruta",this.imagenMinion);
          this.reloj= {
            hora: this.horas,
            minuto:this.minutos,
            segundo: this.segundos,
            milisegundo: this.milisegundos,
            errores: cantidadErrores,
            imagenMinion: this.imagenMinion
          };

          // //console.log(this.reloj)
          this.reloj$.next(this.reloj);
          // this.lstorage.setLocalStorage('reloj',this.reloj);
        }, 1000);
        this.iniciado=true;
        //console.log('he cambiado this iniciado a ',this.iniciado);
return this.reloj;
  }
getMinutos=()=>{
  setTimeout(() => {
    let ahora= new Date(Date.now()).getTime();
    let fechaLimite = new Date('20 jun 2021').getTime();
    let tiempoRestante=fechaLimite-ahora;
    this.minutos =('0'+Math.floor(tiempoRestante% ((1000*60*60))/(1000*60))).slice(-2);
  }, 1000);

return this.minutos;
}
getSegundos=()=>{
  return this.segundos;
}

getMiliSegundos=()=>{
return this.milisegundos;
}

getReloj =() =>{
return this.reloj;
}

getReloj$=()=>{
  return this.reloj$;
}
getIniciado=()=>{
  return this.iniciado;
}

}
