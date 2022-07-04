import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemComponent } from './pages/tienda/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { DestrezasComponent } from './pages/destrezas/destrezas.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {path: 'destrezas', component: DestrezasComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'portafolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
