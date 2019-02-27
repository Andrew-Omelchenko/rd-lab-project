import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Error} from 'tslint/lib/error';

import { API } from '../core/constants/config';

@Injectable()
export class AuthService {
  private authToken: string;
  private authClaims: object;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.token = localStorage.getItem('token');
    // payload
    this.claims = JSON.parse(localStorage.getItem('claims'));
  }

  get token() {
    return this.authToken;
  }

  set token(token) {
    this.authToken = token;
    localStorage.setItem('token', token);
  }

  get claims() {
    return this.authClaims;
  }

  set claims(claims) {
    this.authClaims = claims;
    localStorage.setItem('claims', JSON.stringify(claims));
  }

  isAuthorized() {
    if (!this.tokenIsNotExpired()) {
      this.clearStorage();
      return false;
    }
    return true;
  }

  clearStorage() {
    this.token = null;
    this.claims = null;
    localStorage.removeItem('token');
    localStorage.removeItem('claims');
  }

  tokenIsNotExpired() {
    if (!this.token) {
      return false;
    }
    return this.claims.exp * 1000 > Date.now();
  }

  signup(userRegisterData) {
    const url = `${API.BASE_URL}${API.ENDPOINTS.CREATE_USER}`;
    const body = JSON.stringify(userRegisterData);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.httpClient.post(url, body, {headers}).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/user', 'profile']);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
  }

  signin(userLoginData) {
    const url = `${API.BASE_URL}${API.ENDPOINTS.LOGIN}`;
    const body = JSON.stringify(userLoginData);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.httpClient.post(url, body, {headers}).subscribe(
      (data) => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );


    // const headers = new Headers({ 'content-type': 'application/json' });
    // const init = {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify(userData),
    //   mode: 'cors',
    //   cache: 'default'
    // };
    // return fetch(`${API.BASE_URL}${API.ENDPOINTS.LOGIN}`, init)
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json().then(answer => {
    //         this.token = answer.token;
    //         this.claims = this.parseJwtClaims(answer.token);
    //         return Promise.resolve({ answer, status: res.status });
    //       });
    //     }
    //     return res.json().then(answer => Promise.reject({ answer, status: res.status }));
    //   });
  }

  private parseJwtClaims(jwtToken) {
    if (jwtToken) {
      const base64Url = jwtToken.split('.')[1];
      // replaces invalid symbols
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
    return {};
  }
}
