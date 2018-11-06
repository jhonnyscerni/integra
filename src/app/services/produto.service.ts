import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Headers } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs/Observable';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


constructor(private http: Http) { }


public getProdutos(page, size): Observable<Page> {

  const headers = new Headers();

  headers.append('Authorization', 'Bearer a03bc8a3c387deb73ecb813bc43a31df70f49cbe');

  return this.http.get(`${environment.urlbase}/products/available?page=${page}&size=${size}` ,  {headers})
      .map( (res:any) => {
        return res.json();
      })
  //    .map( (data: any) => {
  //      return data._embedded.product as Produto[];
  //    });
}


}
