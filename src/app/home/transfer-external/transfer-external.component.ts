import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-external',
  templateUrl: './transfer-external.component.html',
  styleUrls: ['./transfer-external.component.scss']
})
export class TransferExternalComponent implements OnInit {

  constructor() { }

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
