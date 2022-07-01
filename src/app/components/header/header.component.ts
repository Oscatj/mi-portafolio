import { Component, OnInit } from '@angular/core';
import { DarkModeServiceService } from 'src/app/services/dark-mode-service.service';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  changeMode(){
    this.darkModeService.changeMode();
  }
  constructor(public _service: InfoPaginaService, private darkModeService: DarkModeServiceService) { }

    ngOnInit(): void {
    }
    get dark () {
      return this.darkModeService.dark;
    }
    

}
