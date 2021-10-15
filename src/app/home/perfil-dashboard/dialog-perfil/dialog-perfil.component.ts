import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-perfil',
  templateUrl: './dialog-perfil.component.html',
  styleUrls: ['./dialog-perfil.component.scss']
})
export class DialogPerfilComponent implements OnInit {

  correo!: string;
  correoconf!: string;

  groupForm1!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-\\\\A-Z]+@[a-z0-9.-\\\\A-Z]+\\.[a-z\\\\A-Z]{2,4}$')])
  emailconf = new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-\\\\A-Z]+@[a-z0-9.-\\\\A-Z]+\\.[a-z\\\\A-Z]{2,4}$')])

  groupForm2!: FormGroup;
  token = new FormControl('', [Validators.required])

  constructor() { }

  ngOnInit(): void {
    this.groupForm1 = new FormGroup({
      email: this.email,
      emailconf: this.emailconf
    });
    this.groupForm2 = new FormGroup({
      token: this.token
    })
  }

}
