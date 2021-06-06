import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebasResueltasService {

  constructor() { }

numeroPrueba:number=0;

getNumeroPrueba(){
  return this.numeroPrueba;
}

}
