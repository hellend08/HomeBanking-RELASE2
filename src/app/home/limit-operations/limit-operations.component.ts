import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogLimitOpComponent} from "./dialog-limit-op/dialog-limit-op.component";
import {Router} from "@angular/router";
import {DialogSuccessComponent} from "./dialog-success/dialog-success.component";

@Component({
  selector: 'app-limit-operations',
  templateUrl: './limit-operations.component.html',
  styleUrls: ['./limit-operations.component.scss']
})
export class LimitOperationsComponent implements OnInit {

  name!: string;

  num!: number;

  constructor(public dialog: MatDialog, private router: Router) {
  }

  click(){
    this.num = 1
    this.openDialog()
  }

  click1(){
    this.num = 2
    this.openDialog()
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogLimitOpComponent,{
      data: {
        animal: this.num
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // if (result = 1){
      //   const dialogRef = this.dialog.open(DialogSuccessComponent);
      // }
    });
  }
  ngOnInit(): void {

  }

}
