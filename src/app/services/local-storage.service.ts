import { Injectable } from '@angular/core';
import { IReloj } from '../models/reloj';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage( nombre:string,objetoAlLocalStorage :any,){
    try {
      let objetoString=JSON.stringify(objetoAlLocalStorage);
    localStorage.setItem(nombre,objetoString);
    } catch (error) {
      console.log("error al guardar en localstorage",error);
    }
  }
  getLocalStorage(nombreObjetoStorage :string){
    try {
      return JSON.parse(localStorage.getItem(nombreObjetoStorage));
    } catch (error) {
      console.log("error al devolver del local storage "+nombreObjetoStorage, error);
      return null;
    }
  }
}
