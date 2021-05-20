import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IReloj } from 'src/app/models/reloj';
import { CuentaAtrasService } from 'src/app/services/cuenta-atras.service';
import { ErroresService } from 'src/app/services/errores.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styles: [
  ]
})
export class RelojComponent implements OnInit {


milisegundo:string;
minuto:string;
hora:string;
segundo:string;
imagenMinion:string;
private reloj:IReloj;
intervalSubs:Subscription;
switch:boolean=false;
numeroMin;
unaVez:Boolean=false;
  constructor(private cuentaAtras:CuentaAtrasService, private errorS: ErroresService) {

    this.intervalSubs= this.cuentaAtras.getReloj$().subscribe((res:IReloj)=>{
      console.log("lo suscrito en reloj.component, del observvable devuelto de cuentaAtras.getReloj$",res);
      this.reloj=res;
                this.hora= this.reloj.hora;
                this.minuto=this.reloj.minuto;
                this.numeroMin= parseInt(this.minuto);
                const cantidadErrores=  this.errorS.getCantidadErrores();
                this.numeroMin=this.numeroMin-cantidadErrores;
                this.segundo=this.reloj.segundo;
                this.milisegundo=this.reloj.milisegundo;
                console.log('el minuto que deberia ser tras la resta de errores',this.numeroMin);
                  if(this.minuto=='59' && !this.unaVez){
                    errorS.reproducirMusicaFondo();
                    this.unaVez=true;
                  }
                  if(this.minuto=='58' && this.unaVez){
                    this.unaVez=false;

                  }
                  if(this.minuto=='29'&& !this.unaVez){
                    this.unaVez=true;
                    errorS.reproducirMusicaFondo();
                    // oke
                  }
    } );
    this.reloj= this.cuentaAtras.getReloj();
    console.log('this.reloj en el constructor reloj.compoennt', this.reloj);


  }

  ngOnInit() {

    // this.horas.nativeElement.innerHTML=this.cuentaAtras.getMinutos();

  }
}
