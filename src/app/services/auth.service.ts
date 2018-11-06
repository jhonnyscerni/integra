import { Loja } from 'app/models/loja';
import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthService {

  private apiRoot = 'https://app.squidfacil.com.br/oauth';

  constructor(private http: Http) { }

  private setSession(authResult) {
    const token = authResult.token;
    const payload = <Loja> jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('access_token', authResult.token);
    localStorage.setItem('expires_in', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('access_token');
  }

  getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }

  login(client_id: string, client_secret: string ): Observable<any> {

    const body = {
      'grant_type': 'client_credentials',
      'client_id' : '130fe560-fb2a-4b82-a674-6478782ff881',
      'client_secret': 'ydAK+UGPIwWFDZuoagOXh+k6VbBwN1SoOXy3Ofev',
      'scope': ''
     };

    const headers = new Headers();

    const myFormData = this.getFormData(body);

    headers.append('Content-Type' , 'application/json');

    /**
     *  headers.append('Content-Type' , 'application/json'),
        headers.append('client_id', '130fe560-fb2a-4b82-a674-6478782ff881'),
        headers.append('client_secret', 'ydAK+UGPIwWFDZuoagOXh+k6VbBwN1SoOXy3Ofev'),
        headers.append('grant_type', 'client_credentials')
     */
    
    return this.http.post(this.apiRoot, myFormData).map(res => res.json());
  }



  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post( this.apiRoot,
        { token: this.token }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_in');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}