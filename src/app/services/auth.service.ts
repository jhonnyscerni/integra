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

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(client_id: string, client_secret: string ): Observable<any> {

    const headers = new Headers();

    headers.append('Content-Type' , 'application/json');
    
    return this.http.post(this.apiRoot, 
        JSON.stringify({ 'client_id': client_id, 'client_secret': client_secret, 'grant_type':'client_credentials'}), {headers}
        ).map(res => res.json());
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
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
    const expiration = localStorage.getItem('expires_at');
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