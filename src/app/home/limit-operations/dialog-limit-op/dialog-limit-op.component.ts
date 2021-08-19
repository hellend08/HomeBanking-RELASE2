import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DialogSuccessComponent} from "../dialog-success/dialog-success.component";

@Component({
  selector: 'app-dialog-limit-op',
  templateUrl: './dialog-limit-op.component.html',
  styleUrls: ['./dialog-limit-op.component.scss']
})
export class DialogLimitOpComponent implements OnInit {
  disable = true;

  check = false;
  selected = "8";
  tamaño = 8;
  saldo = 1600;

  inputNum = new FormControl('', [Validators.required])
  inputToken = new FormControl('', [Validators.required])

  constructor(public dialog: MatDialog, private router: Router) { }

  onKeyPress(event: any) {
    const regexpNumber = /[0-9]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

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


  ngOnInit(){

  }

}
