import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IReloj } from 'src/app/models/reloj';
import { CuentaAtrasService } from 'src/app/services/cuenta-atras.service';
import { ErroresService } from 'src/app/services/errores.service';
import { PruebasResueltasService } from 'src/app/services/pruebas-resueltas.service';

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
imagenMinion:string='../../../assets/principal.jpg';
private reloj:IReloj;
intervalSubs:Subscription;
switch:boolean=false;
numeroMin;
unaVez:Boolean=false;
numPrueba:number=0;
  constructor(private cuentaAtras:CuentaAtrasService, private errorS: ErroresService,private pruebas: PruebasResueltasService) {

    this.intervalSubs= this.cuentaAtras.getReloj$().subscribe((res:IReloj)=>{

                  //#region ---------------VISIONADO DE PRUEBAS-----------
                  this.numPrueba=  this.pruebas.getNumeroPrueba();
                  console.log("olaaaaaaa");
                  console.log('el numero de prueba',this.numPrueba);
                  switch (this.numPrueba) {
                  case 0:
                    $('#prueba1').removeClass('d-none').addClass('d-flex');
                    console.log($('#prueba1'));
                    break;
                  case 1:
                    $('#prueba1').children().addClass('disabled');
                    $('#prueba2').removeClass('d-none').addClass('d-flex')
                    break;
                  case 2:
                      $('#prueba1').removeClass('d-none').addClass('d-flex')
                  break;
                  case 3:
                        $('#prueba1').removeClass('d-none').addClass('d-flex')
                  break;
                    default:
                      break;
                  }

                  //#endregion


      // console.log("lo suscrito en reloj.component, del observvable devuelto de cuentaAtras.getReloj$",res);
      this.reloj=res;
      if (this.reloj.minuto!='60'){
        this.imagenMinion= res.imagenMinion;
      }

      console.log('la ruta a imagen minion',this.imagenMinion);
                this.hora= this.reloj.hora;
                this.minuto=this.reloj.minuto;
                this.numeroMin= parseInt(this.minuto);
                const cantidadErrores=  this.errorS.getCantidadErrores();
                this.numeroMin=this.numeroMin-cantidadErrores;
                this.segundo=this.reloj.segundo;
                this.milisegundo=this.reloj.milisegundo;
                // console.log('el minuto que deberia ser tras la resta de errores',this.numeroMin);
                  if(this.minuto=='59' && !this.unaVez){
                    errorS.reproducirMusicaFondo();
                    this.unaVez=true;
                  }
                  if(this.minuto=='58' && this.unaVez){
                    this.unaVez=false;

                  }
                  if(this.minuto=='29'&& this.segundo=='58' && this.milisegundo<='300'){
                    this.unaVez=true;
                    console.log("toca reproducir la musica");
                    errorS.reproducirMusicaFondo();
                    // oke
                  }
                  if(this.minuto<='12'){
                    $('#imagenCambiante').addClass('alerta');
                    errorS.stopMusicaFondo();
                    errorS.stopFinalMusica();
                    if(this.unaVez){
                      // arranca la sirena
                      errorS.onAlarmaFalloSistema();
                      this.unaVez=!this.unaVez;
                    }
                    // si la sirena se ha acabado ...reiniciala
                    if(errorS.estadoAlarmaFalloSistema && !errorS.finDeJuego)  errorS.onAlarmaFalloSistema();

                  }
              if(this.errorS.finDeJuego){
                $('#imagenCambiante').attr('src','../../../assets/agnesTriste.jpg').removeClass('alerta');

              }
    } );
    // this.reloj= this.cuentaAtras.getReloj();
    // console.log('this.reloj en el constructor reloj.compoennt', this.reloj);


    if(this.errorS.finDeJuego){
    this.intervalSubs.unsubscribe();
    }



  }

  ngOnInit() {

    // this.horas.nativeElement.innerHTML=this.cuentaAtras.getMinutos();

  }
}
