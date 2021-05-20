import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  // Je stocke tous les produits dans la variable
  products : any[];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getBeers()
    .subscribe((response: any) => {
      this.products = response;
    });
  }

}
