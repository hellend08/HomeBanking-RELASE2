import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {LimitOperationsComponent} from "./limit-operations/limit-operations.component";
import {TransfersDashboardComponent} from "./transfers-dashboard/transfers-dashboard.component";
import {TransferInternalComponent} from "./transfer-internal/transfer-internal.component";
import {TransferExternalComponent} from "./transfer-external/transfer-external.component";
import {TransferTercerosComponent} from "./transfer-terceros/transfer-terceros.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'configuracion', component: ConfigurationComponent},
      {path: 'limitOp', component: LimitOperationsComponent},
      {path: 'transferencias', component: TransfersDashboardComponent},
      {path: 'transferencias/1', component: TransferInternalComponent},
      {path: 'transferencias/2', component: TransferExternalComponent},
      {path: 'transferencias/3', component: TransferTercerosComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
