import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: any = {};
  cargada = false;

  constructor(private http: HttpClient) {
    
    this.http.get('assets/data/dataInfo.json')
    .subscribe( resp => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
    console.log('Servicio cargado correctamente');
   }
}
