import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './app-nav-menu.component.html',
  styles: [
  ]
})
export class AppNavMenuComponent implements OnInit {
  isExpanded = false;
  constructor() { }

  ngOnInit(): void {
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
