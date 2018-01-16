import { Injectable } from '@angular/core';
import {Http, Headers, Response, Jsonp, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AllFactoryService {

  constructor(
    private http: Http
  ) { }

  getAllFactoryData = (): Observable < Response > => {
    return this
      .http
      .get('assets/data/allFactory.json')
      .map(res => res.json());
  }

}
