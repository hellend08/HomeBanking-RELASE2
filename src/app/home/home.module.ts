import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import { LimitOperationsComponent } from './limit-operations/limit-operations.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {DialogLimitOpComponent} from './limit-operations/dialog-limit-op/dialog-limit-op.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { DialogSuccessComponent } from './limit-operations/dialog-success/dialog-success.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {CurrencyInputDirective} from "./currency.pines";
import { TransfersDashboardComponent } from './transfers-dashboard/transfers-dashboard.component';
import {MatOptionModule, MatRippleModule} from "@angular/material/core";
import { TransferInternalComponent } from './transfer-internal/transfer-internal.component';
import { TransferExternalComponent } from './transfer-external/transfer-external.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from "@angular/material/radio";



@NgModule({
  declarations: [
    LimitOperationsComponent,
    DialogLimitOpComponent,
    DialogSuccessComponent,
    CurrencyInputDirective,
    TransfersDashboardComponent,
    TransferInternalComponent,
    TransferExternalComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxMaskModule.forRoot(),
        MatRippleModule,
        MatStepperModule,
        MatSelectModule,
        MatOptionModule,
        MatRadioModule
    ],exports:[

  ],
  providers: [
    CurrencyPipe
  ]
})
export class HomeModule { }
