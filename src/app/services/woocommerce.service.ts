import { Injectable } from '@angular/core';
import { Http, Headers } from '../../../node_modules/@angular/http';

import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

constructor(private http: Http) { }


public getProdutoWooPublicados(): Observable<any[]> {

  const headers = new Headers();
  headers.append('Content-Type',  'application/json');
  headers.append('consumer_key', 'ck_223521511d7ca73a49b9fc617d199cc6443453ba');
  headers.append('consumer_secret', 'cs_3261f1355a69eb7b8096405c4c115c9c420f4cf5');

  return this.http.get(`${environment.urlbasewoo}/wp-json/wp/v2/product` ,  {headers})
  .map( res => {
    return res.json();

  })
}

}
