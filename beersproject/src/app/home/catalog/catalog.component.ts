import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
// Je stocke mon catalog dans une variable
catalog : any[];
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getBeers()
    .subscribe((response: any) => {
      this.catalog = response;
    });
  }

}
