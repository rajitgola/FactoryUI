import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginService } from './services/login.service';
import { Routes , Router ,  RouterModule , RouterState, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loginData : any ;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

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
            this.router.navigate(['allFactory']);
        }
    }
  }

}
