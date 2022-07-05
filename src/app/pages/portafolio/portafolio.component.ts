import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productosServices: ProductosService) { }

   ngOnInit(): void {
              }        
   descarga(path: string = '/assets/cv.pdf'){
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/file';
    link.download = path;
    document.body.appendChild(link);
    link.click();
    link.remove();
   }   

}
