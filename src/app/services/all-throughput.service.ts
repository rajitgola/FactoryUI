import { Injectable } from '@angular/core';
import {Http, Headers, Response, Jsonp, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AllThroughputService {

  constructor(
    private http: Http
  ) { }

  getAllThroughputData = (): Observable < Response > => {
    return this
      .http
      .get('assets/data/factoryThroughPut.json')
      .map(res => res.json());
  }

}
