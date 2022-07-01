import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeServiceService {

  dark: boolean = false;

  constructor() { }

  changeMode(){
    this.dark = !this.dark
  }
}
