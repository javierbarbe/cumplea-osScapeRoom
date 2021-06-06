import { CuentaAtrasService } from 'src/app/services/cuenta-atras.service';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ErroresService {
finDeJuego:boolean=false;
  constructor() {
    console.log("construccion de errores servvice");

   }
   audioFondo = new Audio('../../assets/musicaSuspense30min.mp3');
   private cantidadErrores:number=0;
   parado:boolean=false;
   private errorNuevo:boolean=false;
   audioAlarmaFalloSistema = new Audio('../../assets/alarma-fallo-en-el-sistema-efecto-de-sonido.mp3');
   addError(){
     this.errorNuevo=true;
     this.cantidadErrores++;
     this.reproducirError();
     Swal.fire({
       title:'Oh no!! Error',
       timer:3800,
       imageUrl:'../../assets/falloMinion.jpg',
       text:'Has respondido el pupete equivocado'
     })
   }
   add_n_errores(cantErrores:number){
     this.cantidadErrores+=cantErrores;
   }

  async reproducirError() {
    const audio = new Audio('../../assets/risaCorta.mp3');
    console.log(audio.ended);
    audio.play();


}

getEstadoFinJuego(){
  return this.finDeJuego;
}

reproducirFinDeJuegoSonido(){
  this.finDeJuego=true;
  this.audioAlarmaFalloSistema.pause();
  this.audioFondo.pause();
  const audio = new Audio('../../assets/gameOverCortado (mp3cut.net).mp3');
  audio.play();

}
onAlarmaFalloSistema(){
  this.audioAlarmaFalloSistema.play();
  this.audioFondo.pause();
}

estadoAlarmaFalloSistema(){
  return this.audioAlarmaFalloSistema.ended;
}

reproducirMusicaFondo(){
  this.audioFondo.volume = 0.25;
  this.audioFondo.currentTime= 130;
  this.audioFondo.play().then(resu=> console.log(resu));
}
stopMusicaFondo(){
  console.log(this.audioFondo.duration);
  if(this.parado){
    this.reproducirMusicaFondo();
  }else{
    this.audioFondo.pause();
  }
  this.parado=!this.parado;
}
stopFinalMusica (){
  this.audioFondo.pause();

}

   quitaError(){
     this.errorNuevo=false;
   }
   getHayError(){
     return this.errorNuevo;
   }
   getCantidadErrores(){
     return this.cantidadErrores;
   }
   reiniciaErrores(){
     this.cantidadErrores=0;
   }
}
