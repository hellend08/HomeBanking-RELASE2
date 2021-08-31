import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {LimitOperationsComponent} from "./limit-operations/limit-operations.component";
import {TransfersDashboardComponent} from "./transfers-dashboard/transfers-dashboard.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'configuracion', component: ConfigurationComponent},
      {path: 'limitOp', component: LimitOperationsComponent},
      {path: 'transferencias', component: TransfersDashboardComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
