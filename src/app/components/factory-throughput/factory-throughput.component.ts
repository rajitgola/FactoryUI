import { Component, OnInit } from '@angular/core';
import { AllThroughputService } from '../../services/all-throughput.service';
import { Routes , Router , ActivatedRoute, RouterModule , RouterState, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-factory-throughput',
  templateUrl: './factory-throughput.component.html',
  styleUrls: ['./factory-throughput.component.scss']
})
export class FactoryThroughputComponent implements OnInit {
  factoryId : any;
  currentThroughput : any;

  // graphs start
 public pieChartLabels:string[] = ['Widget 1 Hits', 'Widget 2 Hits', 'Widget 3 Hits' , 'Widget 4 Hits'];
 public pieChartData:number[] = [300, 500, 100, 100];
 public pieChartType:string = 'pie';

  // lineChart
 public lineChartData:Array<any> = [
   [65, 59, 80, 81, 56, 55, 40 ,12 ,20 ,20 ,14 ,12]
 ];
 // public lineChartData:Array<any> = [
 //   [65, 59, 80, 81, 56, 55, 40 ,10 ,20 ,20 ,10 ,12],
 //   [28, 48, 40, 19, 86, 27, 90 , 65, 59, 80, 81,12]
 // ];
 public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug' ,'Sept' ,'Nov' ,'Dec'];
 public lineChartType:string = 'line';
 // graphs ends

  constructor(
    private allThroughputService: AllThroughputService,
    private router: Router,
    private route : ActivatedRoute,
  ){
    this.factoryId = this.route.snapshot.params['id'];
    console.log(this.factoryId);
  }

//graph starts
  public randomizeType():void {
   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
 }

   // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
 //graph ends

  ngOnInit() {
    console.log('Here In ALlfactory');
    this.allThroughputService.getAllThroughputData().subscribe(
      res => {
        this.getCurrentThroughput(res);
        // this.currentFactory = res.filter(res=> res.factoryId == this.factoryId),
        // console.log(this.currentFactory);
      }
    );
  }

  getCurrentThroughput(res){
    this.currentThroughput = res.find(res=> res.factoryId == this.factoryId),
    console.log(this.currentThroughput);
    console.log(typeof this.currentThroughput);
  }

}
