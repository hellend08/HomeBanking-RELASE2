import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector: 'app-act-token',
  templateUrl: './act-token.component.html',
  styleUrls: ['./act-token.component.scss'],
  animations: [
    trigger('enterState', [
      state('void',style({
        transform: 'translateY(-100%)',
        opacity:0.3
      })),
      transition(':enter', [
        animate(5000, style({
          transform: 'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]

})
export class ActTokenComponent implements OnInit {

  qrActive = false;
  qrAutenticacion = false;
  qrScan = true;

  groupForm1!: FormGroup;
  checked = new FormControl('', Validators.required);

  constructor(private router: Router) { }

  clickFinalizar(){
    if (!this.qrAutenticacion){
      this.qrScan = false;
      this.qrAutenticacion = false;
      this.qrActive = true;
    }
  }

  ngOnInit(): void {
    this.groupForm1 = new FormGroup({
      check: this.checked,
    })
  }

  public redirectConfig(){
    this.router.navigateByUrl('/home/configuracion')
  }

}
