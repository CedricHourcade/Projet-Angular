import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-our-beer',
  templateUrl: './our-beer.component.html',
  styleUrls: ['./our-beer.component.scss']
})
export class OurBeerComponent implements OnInit {
// Je stocke mes bières dans un tableau
beers : any[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getBeers()
    .subscribe((response : any) => {
      this.beers = response.slice(3,6);
      // this.beers = response.slice(3,6);
    });

  }

}
