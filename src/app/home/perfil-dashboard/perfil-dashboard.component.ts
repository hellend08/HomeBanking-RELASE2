import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdvertenciaComponent} from "./advertencia/advertencia.component";
import {DialogPerfilComponent} from "./dialog-perfil/dialog-perfil.component";

@Component({
  selector: 'app-perfil-dashboard',
  templateUrl: './perfil-dashboard.component.html',
  styleUrls: ['./perfil-dashboard.component.scss']
})
export class PerfilDashboardComponent implements OnInit {

  userEmail: string = '';
  advertencia = true;

  constructor(public dialog: MatDialog) { }

  openDialog(){
    if (this.advertencia === true){
      this.dialog.open(AdvertenciaComponent, {
        width: '296px',
      });
      this.advertencia = false;
    }else{
      const dialogRef = this.dialog.open(DialogPerfilComponent, {
        width: '399px',
        height: '394px',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.userEmail = result;
        console.log(this.userEmail)
      })
    }

  }

  ngOnInit(): void {
  }

}
