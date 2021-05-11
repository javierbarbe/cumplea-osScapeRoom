import { Component, Renderer2, ViewChild, OnInit, ElementRef } from '@angular/core';
import { CuentaAtrasService } from 'src/app/services/cuenta-atras.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

@ViewChild('horas',{ static:true}) horas : ElementRef;
@ViewChild('minutos',{ static:true}) minutos : ElementRef;
@ViewChild('segundos',{ static:true}) segundos : ElementRef;
@ViewChild('milisegundos',{ static:true}) milisegundos : ElementRef;
minuto:string;
segundo:string;
  constructor(private cuentaAtras:CuentaAtrasService,private renderer: Renderer2) {
    this.cuentaAtras.Relojito();
    // this.renderer.setProperty(this.minutos,'innerHTML', this.cuentaAtras.getMinutos());
    console.log('los minutos que van dentro de minutos',this.cuentaAtras.getMinutos());
    this.minuto= this.cuentaAtras.getMinutos();
  }

  ngOnInit() {

    // this.horas.nativeElement.innerHTML=this.cuentaAtras.getMinutos();

  }

}
