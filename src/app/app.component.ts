import { LocalStorageService } from './services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escapeRoom';

  constructor( private lstorage: LocalStorageService){
// console.log('hay reloj?',lstorage.getLocalStorage('reloj'));
  }
}
