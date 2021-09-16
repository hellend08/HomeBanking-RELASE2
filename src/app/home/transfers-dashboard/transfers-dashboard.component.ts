import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transfers-dashboard',
  templateUrl: './transfers-dashboard.component.html',
  styleUrls: ['./transfers-dashboard.component.scss']
})
export class TransfersDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  public redirectTransfer1() {
    this.router.navigateByUrl('/transferencias/1');
  }

  public redirectTransfer2() {
    this.router.navigateByUrl('/transferencias/2');
  }

  public redirectTransfer3() {
    this.router.navigateByUrl('/transferencias/3');
  }

  ngOnInit(): void {
  }

}
