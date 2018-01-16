import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';

import { LoginService } from './services/login.service';
import { AllFactoryService } from './services/all-factory.service';
import { AllThroughputService } from './services/all-throughput.service';


import { AllFactoryComponent } from './components/all-factory/all-factory.component';
import { FactoryLandingComponent } from './components/factory-landing/factory-landing.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { FactoryThroughputComponent } from './components/factory-throughput/factory-throughput.component';

@NgModule({
  declarations: [
    AppComponent,
    AllFactoryComponent,
    FactoryLandingComponent,
    ProjectSummaryComponent,
    FactoryThroughputComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [LoginService , AllFactoryService , AllThroughputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
