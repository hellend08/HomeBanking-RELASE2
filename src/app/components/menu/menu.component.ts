import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ocultarSaldos = false;
  inicio = false;
  transfer = false;
  productos = false;
  perfil = false;
  configuracion = false;
  seguridad = false;

  @Output() closeSideNav = new EventEmitter<any>();

  public name!: string;

  constructor(private router: Router) { }

  public redirectGeneral() {
    this.router.navigateByUrl('/dashboard/general');
  }

  clickinicio(){
    this.inicio = true;
    this.transfer = false;
    this.productos = false;
    this.perfil = false;
    this.configuracion = false;
    this.seguridad = false;
  }

  clickTransfer(){
    this.inicio = false;
    this.transfer = true;
    this.productos = false;
    this.perfil = false;
    this.configuracion = false;
    this.seguridad = false;
  }

  public redirectConfig(){
    this.router.navigateByUrl('/home/configuracion')
  }

  public redirectTransfer(){
    this.router.navigateByUrl('/home/transferencias')
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


  public redirectProduct() {
    this.router.navigateByUrl('/dashboard/productos');
  }

  public redirectConfiguracion() {
    this.router.navigateByUrl('/dashboard/configuracion');
  }

  public redirectPerfil() {
    this.router.navigateByUrl('/home/perfil');
  }

  public redirectCreateAccount() {
    this.router.navigateByUrl('/dashboard/create-account');
  }

  ngOnInit(): void {
    this.inicio = true;
  }

}
