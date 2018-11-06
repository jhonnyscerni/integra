import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Headers } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs/Observable';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


constructor(private http: Http, private oAuth : AuthService) { }


public getProdutos(page, size): Observable<Page> {

  const headers = new Headers();

  headers.append('Authorization', `Bearer ${this.oAuth.token}` );

  return this.http.get(`${environment.urlbase}/products/available?page=${page}&size=${size}` ,  {headers})
      .map( (res:any) => {
        return res.json();
      })
  //    .map( (data: any) => {
  //      return data._embedded.product as Produto[];
  //    });
}


}
