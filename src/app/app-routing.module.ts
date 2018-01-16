import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AllFactoryComponent } from './components/all-factory/all-factory.component';
import { FactoryLandingComponent } from './components/factory-landing/factory-landing.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { FactoryThroughputComponent } from './components/factory-throughput/factory-throughput.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'allFactory',
    component: AllFactoryComponent ,  canActivate : [AuthGuard]
  },
  {
    path: 'factoryLanding/:id',
    component: FactoryLandingComponent , canActivate : [AuthGuard]
  },
  {
    path: 'projectSummary/:factoryId/:projectId',
    component: ProjectSummaryComponent , canActivate : [AuthGuard]
  },
  {
    path: 'factoryThroughput/:id',
    component: FactoryThroughputComponent , canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
