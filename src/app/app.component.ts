import { Component , OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginService } from './services/login.service';
import { Routes , Router ,  RouterModule , RouterState, RouterStateSnapshot} from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loginData : any ;
  isLoggedIn : boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _cookieService:CookieService
  ){}

  ngOnInit(){
    this.checkLogin();
  }

  checkLogin(){
    console.log('Cookie');
    console.log(this._cookieService.get('token'));
    if(this._cookieService.get('token')){
      this.isLoggedIn = true;
      this.router.navigate(['allFactory']);
    }
  }

  loginSubmit(value){
    this.loginService.getLoginData().subscribe(
      res => {
      this.loginData = res,
      this.checkUserLogin(res , value);
      }
    );
    console.log(value);
  }

  checkUserLogin(loginData , loginValue){
    for(let i=0 ; i< this.loginData.length; i++)
    {
        if (this.loginData[i].username === loginValue.username && this.loginData[i].password === loginValue.password)
        {
            console.log("User Found" , this.loginData[i]);
            this._cookieService.put('token', 'randomTokenValue');
            this._cookieService.put('username', loginValue.username);
            this.isLoggedIn = true;
            this.router.navigate(['allFactory']);
        }
    }
  }

}
