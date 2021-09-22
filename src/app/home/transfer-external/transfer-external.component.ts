import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {TerminosCondicionesComponent} from "./terminos-condiciones/terminos-condiciones.component";

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
    {value: '1', tipo: 'Ahorros Soles', cuenta: 10203040506070},
    {value: '1', tipo: 'Ahorros Dolares', cuenta: 10203040506071},
    {value: '1', tipo: 'Ahorros Soles', cuenta: 10203040506072},
  ]

  //cuentas propias y terceros
  variable = 'A'

  selectRadioButton!: string;
  selector1!: string;
  selector2!: string;

  // Paso1
  groupForm1!: FormGroup;
  montoT = new FormControl('', [Validators.required]);
  selectorigin = new FormControl('', [Validators.required]);
  selectordest = new FormControl('', [Validators.required])

  constructor(private router: Router, public dialog: MatDialog) { }

  public redirectTransfer(){
    this.router.navigateByUrl('/home/transferencias')
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

  ngOnInit(): void {
    this.groupForm1 = new FormGroup({
      montoT: this.montoT,
      selectorigin: this.selectorigin,
      selectordest: this.selectordest,
      'selectRadio': new FormControl(),
      'variableRa': new FormControl()
    });
  }

}
