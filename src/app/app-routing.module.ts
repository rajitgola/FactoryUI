import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AllFactoryComponent } from './components/all-factory/all-factory.component';
import { FactoryLandingComponent } from './components/factory-landing/factory-landing.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { FactoryThroughputComponent } from './components/factory-throughput/factory-throughput.component';

const routes: Routes = [
  {
    path: 'allFactory',
    component: AllFactoryComponent
  },
  {
    path: 'factoryLanding/:id',
    component: FactoryLandingComponent
  },
  {
    path: 'projectSummary',
    component: ProjectSummaryComponent
  },
  {
    path: 'factoryThroughput/:id',
    component: FactoryThroughputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
