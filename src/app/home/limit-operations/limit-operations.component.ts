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

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog(){
    const dialogRef = this.dialog.open(DialogLimitOpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result = true){
        const dialogRef = this.dialog.open(DialogSuccessComponent);
      }
    });
  }
  ngOnInit(): void {
  }

}
