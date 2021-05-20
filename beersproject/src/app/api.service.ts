import { Injectable } from '@angular/core';
// J'importe mon httpclient dans mon api
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getBeers() {
    return this.http.get('https://api.punkapi.com/v2/beers');
  }

  getBeersByID(id : number) {
    return this.http.get('https://api.punkapi.com/v2/beers/' + id);
  }
}

