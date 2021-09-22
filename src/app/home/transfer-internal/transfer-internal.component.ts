import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DialogFrecuentesComponent} from "../dialog-frecuentes/dialog-frecuentes.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

interface Data{
  value: string;
  tipo: string;
  cuenta: number;
}

@Component({
  selector: 'app-transfer-internal',
  templateUrl: './transfer-internal.component.html',
  styleUrls: ['./transfer-internal.component.scss'],
  animations: [
    trigger('changeState', [
      state ('stateRegister', style({transform: 'translateX(-50%)', opacity: 1})),
      state ('stateLogin', style({transform: 'translateX(-250%)', opacity: 0,     display:'none'})),
      transition('stateLogin=>stateRegister', [animate('0.3s ease-in')]),
      transition('stateRegister=>stateLogin', [animate('0.3s ease-out')])
    ])
  ]
})
export class TransferInternalComponent implements OnInit {

  selectRadioButton!: string;
  selector1!: string;
  selector2!: string;

  selectdata: Data[] = [
    {value: '1', tipo: 'Ahorros Soles', cuenta: 10203040506070},
    {value: '1', tipo: 'Ahorros Dolares', cuenta: 10203040506071},
    {value: '1', tipo: 'Ahorros Soles', cuenta: 10203040506072},
  ]


  frecuente!: boolean;
  cambio = 0
  saldo!: number;
  islinear = true;
  sol = true;
  dol = false;

  // Paso1
  groupForm1!: FormGroup;
  montoT = new FormControl('', [Validators.required]);
  selectorigin = new FormControl('', [Validators.required]);
  selectordest = new FormControl('', [Validators.required])

  // Paso2
  groupForm2!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  public redirectTransfer1(){
    this.router.navigateByUrl('/home/transferencias')
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogFrecuentesComponent, {
      width: '321px',
      height: '337px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
      this.frecuente = result;
    })
  }

  soles(){
    this.sol = true;
    this.dol = false;
  }

  dolar(){
    this.sol = false;
    this.dol = true;
  }

  onKeyPress(event: any) {
    const regexpNumber = /[0-9]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

  public redirectTransferDashboard() {
    this.router.navigateByUrl('/transferencias');
  }

  ngOnInit() {
    this.groupForm1 = new FormGroup({
      montoT: this.montoT,
      selectorigin: this.selectorigin,
      selectordest: this.selectordest,
      'selectRadio': new FormControl()
    });
    this.selectRadioButton = 'PEN';
  }

}
