import { CuentaAtrasService } from 'src/app/services/cuenta-atras.service';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  constructor() {

   }
   private cantidadErrores:number=0;
   private errorNuevo:boolean=false;
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

  async reproducirError() {
    const audio = new Audio('../../assets/risaCorta.mp3');
    console.log(audio.ended);
    audio.play();


}

reproducirFinDeJuegoSonido(){
  const audio = new Audio('../../assets/gameOverCortado (mp3cut.net).mp3');
  audio.play();
}
reproducirMusicaFondo(){
  const audio = new Audio('../../assets/musicaSuspense30min.mp3');
  audio.play().then(resu=> console.log(resu))
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
}
