import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  cargando = true;
  productos: any = [];
  productosFiltrado: Producto[] = [];

  constructor(private http : HttpClient) {

    this.cargarProductos();
   }

   private cargarProductos(){

    this.http.get('https://portafolio-angular-63d4c-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto) =>{
      console.log(resp);
      this.productos = resp;
      setTimeout(() => {
         this.cargando = false;
      }, 2000);
     
    });
  }
  getProducto(id: string) {
    return this.http.get(`https://portafolio-angular-63d4c-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProductos(termino: string){
      this.productosFiltrado = this.productos.filter(() =>{
        return true;
      });
  }
}
