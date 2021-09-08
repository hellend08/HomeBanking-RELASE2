import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transfer-external',
  templateUrl: './transfer-external.component.html',
  styleUrls: ['./transfer-external.component.scss']
})
export class TransferExternalComponent implements OnInit {

  constructor(private router: Router) { }

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

  ngOnInit(): void {
  }

}
