import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DialogSuccessComponent} from "../dialog-success/dialog-success.component";

export interface DialogData {
  animal: 1 | 2 ;
}

@Component({
  selector: 'app-dialog-limit-op',
  templateUrl: './dialog-limit-op.component.html',
  styleUrls: ['./dialog-limit-op.component.scss'],
})
export class DialogLimitOpComponent implements OnInit {
  disable = true;

  check = false;
  selected = "8";
  tamaño = 8;
  saldo!: string | number;
  saldoM = 13;

  inputNum = new FormControl('', [Validators.required, Validators.maxLength(3)])
  inputToken = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])

  constructor(public dialog: MatDialog, private router: Router,
    dialogRef: MatDialogRef<DialogLimitOpComponent> , @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private FB: FormBuilder,
  ) {
  }


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
    return this.inputToken.hasError('result') ? 'El monto ingresado supera el permitido': '';
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
    this.saldo = 0
  }


  // processMyValue(): void {
  //   let numberVal = parseInt(this.saldo).toLocaleString();
  //   this.saldo = numberVal;
  //   this.validacion();
  // }


}
