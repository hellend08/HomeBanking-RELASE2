import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { TerminosCondicionesComponent } from "./terminos-condiciones/terminos-condiciones.component";
import { DialogFrecuentesComponent } from "../dialog-frecuentes/dialog-frecuentes.component";
import { min } from "rxjs/operators";
import { trigger, animate, transition } from '@angular/animations';
import {MatStepper} from "@angular/material/stepper";
import {DialogErrorExtComponent} from "./dialog-error-ext/dialog-error-ext.component";

@Component({
  selector: 'app-transfer-external',
  templateUrl: './transfer-external.component.html',
  styleUrls: ['./transfer-external.component.scss'],
  animations: [
    trigger('changeState', [
      transition('USD => PEN', [
        animate('1s')
      ]),
  ])
  ]

})
export class TransferExternalComponent implements OnInit {

  sol = true;
  dol = false;
  error = true;

  default: boolean = true;

  maskProps = {
    mask: Number,
    thousandsSeparator: ",",
    scale: 2, // digits after decimal
    signed: false, // allow negative
    normalizeZeros: true, // appends or removes zeros at ends
    radix: ".", // fractional delimiter
    padFractionalZeros: true // if true, then pads zeros at end to the length of scale
  };

  maskProps2 = {
    mask: Number,
    startsWith: "-",
    thousandsSeparator: ",",
    scale: 2, // digits after decimal
    signed: false, // allow negative
    normalizeZeros: true, // appends or removes zeros at ends
    radix: ".", // fractional delimiter
    padFractionalZeros: true // if true, then pads zeros at end to the length of scale
  };

  currencyMask = {
    mask: [
      {
        mask: "" // To hide $ if field is empty
      },
      {
        mask: "num",
        blocks: {
          num: this.maskProps
        }
      },
      {
        mask: "-num",
        blocks: {
          num: this.maskProps2
        }
      }
    ],
    dispatch: (
      appended: string,
      dynamicMasked: IMask.MaskedDynamic,
      flags: any
    ) => {
      // determine which mask to apply
      // if ( !flags?.input ) { return dynamicMasked.compiledMasks[2]; }
      let index = /^-/.test(dynamicMasked.value + appended) ? 2 : 1;
      if (dynamicMasked.value + appended === "") {
        index = 0;
      }
      // if ( appended === '-' ) {
      //   index = 2;
      // }
      console.log("D", index, dynamicMasked.value, appended, flags);
      return dynamicMasked.compiledMasks[index];
    }
  };

  selectdata: any[] = [
    {id: '1', nombre: 'BCP'},
    {id: '2', nombre: 'BBVA'},
    {id: '3', nombre: 'Interbank'},
    {id: '4', nombre: 'Scotiabank'},
    {id: '5', nombre: 'Banco de la Nación'}
  ]

  selectCuentas: any[] = [
    {value: '1', tipo: 'Ahorros Soles', cuenta: 102030405060701234},
    {value: '2', tipo: 'Ahorros Dolares', cuenta: 202030405060711234},
    {value: '3', tipo: 'Ahorros Soles', cuenta: 302030405060721234},
  ]

  selected = '8';
  valordocument!: number;
  doc_type!: string;

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
  selecDNIinput = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9]*$')]);
  token = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)] );
  // email = new FormControl('', Validators.email)
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-\\\\A-Z]+@[a-z0-9.-\\\\A-Z]+\\.[a-z\\\\A-Z]{2,4}$')])

  emailFormControl = new FormControl('', [Validators.required, Validators.email])
  check = new FormControl('')
  checked = false;

  constructor(private router: Router, public dialog: MatDialog) {
  }

  valores: any[] = [
    {nombre:  'DNI', input: 8},
    {nombre: 'CE', input: 11},
    {nombre: 'RUC', input: 11},
  ]

  public redirectTransfer(){
    this.router.navigateByUrl('/home/transferencias')
  }

  public redirectConfig(){
    this.router.navigateByUrl('/home/configuracion')
  }

  selecciondoc(){
    if(this.selected === 'DNI'){
      this.valordocument = 8
    }else{
      if (this.selected === 'CE'){
        this.valordocument = 11
      }else{
        if (this.selected === 'RUC'){
          this.valordocument = 11
        }else{
          if (this.selected === 'Pasaporte'){
            this.valordocument = 11
          }
        }
      }
    }
  }

  public nexdialog(stepper: MatStepper) {
    if (this.error){
      const dialogRef = this.dialog.open(DialogErrorExtComponent, {
        width: '296px',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.error = !result;
      })
    }else{
      stepper.next();
    }
  }

  prueba: any;

  onKeyPress(event: any) {
    const regexpNumber = /[0-9\.]/;

    if (this.selected == '8') {
      let inputCharacter = String.fromCharCode(event.charCode);
      if (event.keyCode !== 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
      // console.log("entro");
      }
    }
  }

  onKeyPressMonto(event: any) {
    const regexpNumber = /[0-9\.]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
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

  onKeyPressInput(event: any) {
    if (this.selected == '8') {
      const regexpNumber = /[0-9]/;
      let inputCharacter = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
        event.preventDefault();
      }
    }
    else {
      const regexpNumber = /[0-9\a-z\A-Z]/;
      let inputCharacter = String.fromCharCode(event.charCode);
      if (event.keyCode != 9 && !regexpNumber.test(inputCharacter)) {
        event.preventDefault();
      }
    }
  }

  soles(){
    this.sol = true;
    this.dol = false;
  }

  dolar(){
    this.sol = false;
    this.dol = true;
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
      'variableRa': new FormControl(),
      'selectRadio': new FormControl()
    });
    this.groupForm2 = new FormGroup({
      token: this.token,
      check: this.check
    });
    this.groupForm3 = new FormGroup({
      email: this.email
    })
    this.selectRadioButton = 'PEN';
  }

}
