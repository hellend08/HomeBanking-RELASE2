import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface Data{
  value: string;
  tipo: string;
  cuenta: number;
}

@Component({
  selector: 'app-transfer-internal',
  templateUrl: './transfer-internal.component.html',
  styleUrls: ['./transfer-internal.component.scss']
})
export class TransferInternalComponent implements OnInit {

  selectdata: Data[] = [
    {value: '1', tipo: 'Ahorros Soles', cuenta: 10203040506070},
    {value: '1', tipo: 'Ahorros Dolares', cuenta: 10203040506071},
    {value: '1', tipo: 'Ahorros Soles', cuenta: 10203040506072},
  ]

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

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  public redirectTransfer(){
    this.router.navigateByUrl('/home/transferencias')
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

  ngOnInit() {
    this.groupForm1 = new FormGroup({
      montoT: this.montoT,
      selectorigin: this.selectorigin,
      selectordest: this.selectordest
    })
  }

}
