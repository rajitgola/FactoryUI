import { Component, OnInit } from '@angular/core';
import { AllFactoryService } from '../../services/all-factory.service';
import { Routes , Router ,  RouterModule , RouterState, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-all-factory',
  templateUrl: './all-factory.component.html',
  styleUrls: ['./all-factory.component.scss']
})
export class AllFactoryComponent implements OnInit {

  allFactories : any = [] ;

  constructor(
    private allFactoryService: AllFactoryService,
    private router: Router
  ){}

  sort(val){

  }

  ngOnInit() {
    console.log('Here In ALlfactory');
    this.allFactoryService.getAllFactoryData().subscribe(
      res => {
        this.allFactories = res,
        console.log(this.allFactories);
      }
    );
  }

}
