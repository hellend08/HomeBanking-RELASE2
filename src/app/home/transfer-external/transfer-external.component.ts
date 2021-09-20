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

  //cuentas propias y terceros
  variable = 'A'
  groupForm1!: FormGroup;

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
      'variableRa': new FormControl()
    });
  }

}
