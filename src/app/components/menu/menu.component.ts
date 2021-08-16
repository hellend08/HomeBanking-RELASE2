import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  inicio = false;
  productos = false;
  perfil = false;
  configuracion = false;
  seguridad = false;

  @Output() closeSideNav = new EventEmitter<any>();

  constructor() { }

  clickinicio(){
    this.inicio = true;
    this.productos = false;
    this.perfil = false;
    this.configuracion = false;
    this.seguridad = false;
  }

  clickproducto(){
    this.inicio = false;
    this.productos = true;
    this.perfil = false;
    this.configuracion = false;
    this.seguridad = false;
  }

  clickperfil(){
    this.inicio = false;
    this.productos = false;
    this.perfil = true;
    this.configuracion = false;
    this.seguridad = false;
  }

  clickconfiguracion(){
    this.inicio = false;
    this.productos = false;
    this.perfil = false;
    this.configuracion = true;
    this.seguridad = false;
  }

  clickseguridad(){
    this.inicio = false;
    this.productos = false;
    this.perfil = false;
    this.configuracion = false;
    this.seguridad = true;
  }

  ngOnInit(): void {
    this.inicio = true;
  }

}
