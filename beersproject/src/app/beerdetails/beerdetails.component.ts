import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-beerdetails',
  templateUrl: './beerdetails.component.html',
  styleUrls: ['./beerdetails.component.scss']
})
export class BeerdetailsComponent implements OnInit {
  // Récupere l'id dans l'URL
  parameter : number;

  // Récupere toutes les bières
  beer : any;

  constructor(private route : ActivatedRoute, public api : ApiService) { }

  ngOnInit(): void {
    // RECUPERATION DU PARAMETRE NOMME 'ID' CONTENU DANS l'URL
    // EXEMPLE : LOCALHOST:4200/beer/50 --> ON STOCKE LE 50 DANS L'ATTRIBUT 'parameter'.
    this.parameter = this.route.snapshot.params['id'];

    this.api.getBeersByID(this.parameter)
    .subscribe((response: any) => {
      this.beer = response[0];
      console.log(this.beer);
      
    });

  }

}
