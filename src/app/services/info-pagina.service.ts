import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pag.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
      this.cargarInfo();
      this.cargarEquipo();
   }

  private cargarInfo(){

    this.http.get('assets/data/dataInfo.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });

  }
   private cargarEquipo(){
    this.http.get('https://portafolio-angular-63d4c-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {

      this.equipo = resp;
      console.log(resp);
    });
  }
}
