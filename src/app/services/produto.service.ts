import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Headers } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs/Observable';
import { Produto } from '../models/produto';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


constructor(private http: Http) { }


public getProdutos(page, size): Observable<Page> {

  const headers = new Headers();

  headers.append('Authorization', 'Bearer ab5896a233e6b8f2c8b0e16ccc278f80cecfc7d8');

  return this.http.get(`${environment.urlbase}/products/available?page=${page}&size=${size}` ,  {headers})
      .map( (res:any) => {
        return res.json();
      })
  //    .map( (data: any) => {
  //      return data._embedded.product as Produto[];
  //    });
}


}
