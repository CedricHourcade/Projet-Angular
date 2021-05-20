import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeerdetailsComponent } from './beerdetails/beerdetails.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  // Je définis la route par défaut
  { path: '', component: HomeComponent},
  { path: 'catalogue', component: CatalogComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'beerdetails/:id', component: BeerdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
