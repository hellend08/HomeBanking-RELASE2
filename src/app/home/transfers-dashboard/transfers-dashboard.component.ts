import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogErrorComponent} from "./dialog-error/dialog-error.component";

@Component({
  selector: 'app-transfers-dashboard',
  templateUrl: './transfers-dashboard.component.html',
  styleUrls: ['./transfers-dashboard.component.scss']
})
export class TransfersDashboardComponent implements OnInit {

  error = true;

  constructor(private router: Router, public dialog: MatDialog) { }

  public redirectTransfer1() {
    if (this.error){
      const dialogRef = this.dialog.open(DialogErrorComponent, {
        width: '296px',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.error = !result;
      })
    }else{
      this.router.navigateByUrl('/transferencias/1');
    }
  }

  public redirectTransfer2() {
    if (this.error){
      const dialogRef = this.dialog.open(DialogErrorComponent, {
        width: '296px',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.error = !result;
      })
    }else{
      this.router.navigateByUrl('/transferencias/2');
    }
  }

  public redirectTransfer3() {
    if (this.error){
      const dialogRef = this.dialog.open(DialogErrorComponent, {
        width: '296px',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.error = !result;
      })
    }else{
      this.router.navigateByUrl('/transferencias/3');
    }
  }

  ngOnInit(): void {
  }

}
