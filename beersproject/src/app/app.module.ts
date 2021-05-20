import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { OurBeerComponent } from './home/our-beer/our-beer.component';
// Je déclare mon httpclient
import { HttpClientModule } from '@angular/common/http';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { BeerdetailsComponent } from './beerdetails/beerdetails.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CarouselComponent,
    OurBeerComponent,
    BeerCardComponent,
    CatalogComponent,
    FooterComponent,
    ShopComponent,
    BeerdetailsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
