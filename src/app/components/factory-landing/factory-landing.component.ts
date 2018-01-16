import { Component, OnInit } from '@angular/core';
import { AllFactoryService } from '../../services/all-factory.service';
import { Routes , Router , ActivatedRoute, RouterModule , RouterState, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-factory-landing',
  templateUrl: './factory-landing.component.html',
  styleUrls: ['./factory-landing.component.scss']
})
export class FactoryLandingComponent implements OnInit {

  allFactories : any = [] ;
  currentFactory : any  ;
  factoryId : any;

  constructor(
    private allFactoryService: AllFactoryService,
    private router: Router,
    private route : ActivatedRoute,
  ){
    this.factoryId = this.route.snapshot.params['id'];
    console.log(this.factoryId);
  }

  ngOnInit() {
    console.log('Here In ALlfactory');
    this.allFactoryService.getAllFactoryData().subscribe(
      res => {
        this.getCurrentFactory(res);
        // this.currentFactory = res.filter(res=> res.factoryId == this.factoryId),
        // console.log(this.currentFactory);
      }
    );
  }

  getCurrentFactory(res){
    this.currentFactory = res.find(res=> res.factoryId == this.factoryId),
    console.log(this.currentFactory);
    console.log(typeof this.currentFactory);
  }

}
