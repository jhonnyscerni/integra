import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Headers } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs/Observable';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url: string = `${environment.urlbase}/products/available`;

constructor(private http: Http) { }


public getProdutos(): Observable<any[]> {

  const headers = new Headers();

  headers.append('Authorization', 'Bearer 79cc4ac46f624a60b917a38b1940bea0bd09aedb');

  return this.http.get(this.url ,  {headers})
      .map( (res:any) => {
        return res.json();
      })
  //    .map( (data: any) => {
  //      return data._embedded.product as Produto[];
  //    });
}


}
