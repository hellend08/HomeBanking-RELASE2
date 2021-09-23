import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {TerminosCondicionesComponent} from "./terminos-condiciones/terminos-condiciones.component";
import {DialogFrecuentesComponent} from "../dialog-frecuentes/dialog-frecuentes.component";

@Component({
  selector: 'app-transfer-external',
  templateUrl: './transfer-external.component.html',
  styleUrls: ['./transfer-external.component.scss']
})
export class TransferExternalComponent implements OnInit {

  selectdata: any[] = [
    {id: '1', nombre: 'BCP'},
    {id: '1', nombre: 'BBVA'},
    {id: '1', nombre: 'Interbank'},
    {id: '1', nombre: 'Scotiabank'},
    {id: '1', nombre: 'Banco de la Nación'}
  ]

  selectCuentas: any[] = [
    {value: '1', tipo: 'Ahorros Soles', cuenta: 102030405060701234},
    {value: '1', tipo: 'Ahorros Dolares', cuenta: 202030405060711234},
    {value: '1', tipo: 'Ahorros Soles', cuenta: 302030405060721234},
  ]

  //cuentas propias y terceros
  frecuente!: boolean;
  variable = 'A'
  inputtoken!: number;

  selectRadioButton!: string;
  selector1!: string;
  selector2!: string;
  numCCI!: number;

  // Paso1
  groupForm1!: FormGroup;
  groupForm2!: FormGroup;
  groupForm3!: FormGroup;
  montoT = new FormControl('', [Validators.required, Validators.min(1)]);
  selectorigin = new FormControl('', [Validators.required]);
  selectordest = new FormControl('', [Validators.required]);
  CCI = new FormControl('', [Validators.required]);
  dataper = new FormControl('', [Validators.required]);
  selecDNIinput = new FormControl('', [Validators.required, Validators.minLength(8),]);
  token = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email)

  constructor(private router: Router, public dialog: MatDialog) { }

  public redirectTransfer(){
    this.router.navigateByUrl('/home/transferencias')
  }

  public redirectConfig(){
    this.router.navigateByUrl('/home/configuracion')
  }

  onKeyPress(event: any) {
    const regexpNumber = /[0-9]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

  openDialog(){
    const dialogref = this.dialog.open(TerminosCondicionesComponent);

    dialogref.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  openDialogo(){
    const dialogRef = this.dialog.open(DialogFrecuentesComponent, {
      width: '321px',
      height: '337px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
      this.frecuente = result;
    })
  }

  ngOnInit(): void {
    this.groupForm1 = new FormGroup({
      montoT: this.montoT,
      selectorigin: this.selectorigin,
      selectordest: this.selectordest,
      CCI: this.CCI,
      selecDNIinput: this.selecDNIinput,
      dataper: this.dataper,
      // 'selectRadio': new FormControl(),
      'variableRa': new FormControl()
    });
    this.groupForm2 = new FormGroup({
      token: this.token
    });
    this.groupForm3 = new FormGroup({
      email: this.email
    })
  }

}
