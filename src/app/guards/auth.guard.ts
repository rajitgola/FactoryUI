import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _cookieService: CookieService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    var token = this._cookieService.get('token');
    	if(token){
        console.log('Token in guard');
            return Observable.of(true);
        } else {
            console.log('Token not in guard');
            return Observable.of(false);
        }
  }
}
