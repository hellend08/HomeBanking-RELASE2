import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  public redirectConfig(){
    this.router.navigateByUrl('/home/configuracion')
  }

  public redirectPerfil(){
    this.router.navigateByUrl('/home/perfil')
  }

  // public redirectTransfer(){
  //   this.router.navigateByUrl('/home/transferencias')
  // }


  ngOnInit(): void {
  }

}
