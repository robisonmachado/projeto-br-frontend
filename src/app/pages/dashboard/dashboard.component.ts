import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router){

  }

  irParaContracheque(){
    const url = 'https://contracheque.cachoeiro.es.gov.br/portal/login'
    window.open(url, '_blank')
    //this.router.navigate(['contracheque'])
  }

}
