import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './home/configuration/configuration.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeRoutingModule } from './home/home-routing.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {CurrencyPipe} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ConfigurationComponent,
        MenuComponent,
        ToolbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HomeRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatDividerModule,
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatBadgeModule,
        MatTooltipModule,
        MatSelectModule,
        MatOptionModule,
        ReactiveFormsModule,
      MatDialogModule,
    ],
    providers: [CurrencyPipe],
    exports: [
        ToolbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
