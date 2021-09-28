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
        mask: "S/num",
        blocks: {
          num: this.maskProps
        }
      },
      {
        mask: "-S/num",
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

  constructor(private router: Router, private _formBuilder: FormBuilder, public dialog: MatDialog) {
  }



  public redirectTransfer1(){
    this.router.navigateByUrl('/home/transferencias')
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

  onKeyPressMonto(event: any) {
    const regexpNumber = /[0-9\.]/;
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
    this.groupForm1 = this._formBuilder.group({
      montoT: this.montoT,
      selectorigin: this.selectorigin,
      selectordest: this.selectordest,
      'selectRadio': new FormControl()
    });

    this.groupForm2 = this._formBuilder.group({
      token: this.token
    })

    this.animacion();
    this.selectRadioButton = 'PEN';
  }

}