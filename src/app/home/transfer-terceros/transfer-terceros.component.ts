import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogFrecuentesComponent} from "../dialog-frecuentes/dialog-frecuentes.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

interface Data{
  value: string;
  tipo: string;
  cuenta: number;
}

@Component({
  selector: 'app-transfer-terceros',
  templateUrl: './transfer-terceros.component.html',
  styleUrls: ['./transfer-terceros.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0.5,
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
})
export class TransferTercerosComponent implements OnInit {

  selectRadioButton!: string;
  isOpen = false;

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
  montoT = new FormControl('', [Validators.required, Validators.min(1)]);
  selectorigin = new FormControl('', [Validators.required]);
  selectordest = new FormControl('', [Validators.required, Validators.maxLength(18)])

  // Paso2
  groupForm2!: FormGroup;
  token = new FormControl('', [Validators.required]);

  // Paso3
  emailFormControl = new FormControl('', [Validators.required, Validators.email])

  constructor(private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog) {
  }



  public redirectTransfer1(){
    this.router.navigateByUrl('/home/transferencias/3')
  }

  public redirectConfig(){
    this.router.navigateByUrl('/home/configuracion')
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

  animacion(){
    if (this.selectordest.value.length == 15){
      this.isOpen = true;
    }else{
      this.isOpen = false;
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

    this.groupForm2 = new FormGroup({
      token: this.token
    })

    this.animacion();
    this.selectRadioButton = 'PEN';
  }

}
