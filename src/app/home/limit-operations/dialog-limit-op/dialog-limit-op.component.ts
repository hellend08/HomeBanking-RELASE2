import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DialogSuccessComponent} from "../dialog-success/dialog-success.component";

@Component({
  selector: 'app-dialog-limit-op',
  templateUrl: './dialog-limit-op.component.html',
  styleUrls: ['./dialog-limit-op.component.scss']
})
export class DialogLimitOpComponent implements OnInit {

  check = false;
  selected = "8";
  xd = 1;

  inputNum = new FormControl('', [Validators.required])
  inputToken = new FormControl('', [Validators.required])

  constructor(public dialog: MatDialog, private router: Router) { }

  getErrorMessage() {
    if (this.inputNum.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return this.inputNum.hasError('result') ? 'El monto ingresado supera el permitido': '';
  }

  getErrorMessageToken() {
    if (this.inputToken.hasError('required')){
      return 'Este campo es obligatorio';
    }
    return this.inputToken.hasError('result') ? 'Ingresa el Token Digital correcto': '';
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogSuccessComponent);
  }

  ngOnInit(): void {
  }

}
