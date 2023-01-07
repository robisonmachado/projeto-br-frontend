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

  abrirContracheque(){
    console.log('abrindo contracheque...');
    const url = 'https://contracheque.cachoeiro.es.gov.br/portal/login'
    window.open(url)
  }

  abrirFuncional(){
    console.log('abrindo funcional...');
    this.router.navigate(['funcional'])
  }

  abrirCRAF(){
    console.log('abrindo CRAF...');
    this.router.navigate(['craf'])
  }

  abrirCIA(){
    console.log('abrindo CIA...');
    this.router.navigate(['cia'])
  }

  abrirBU(){
    console.log('abrindo BU...');
    const url = 'http://portal.sesp.es.gov.br'
    window.open(url)
  }

  abrirDiarioOficial(){
    console.log('abrindo Diário Oficial...');
    const url = 'https://diario.cachoeiro.es.gov.br/dio/home/diario_oficial'
    window.open(url)
  }

  abrirLegislacao(){
    console.log('abrindo Legislação...');
    const url = 'http://legislacaocompilada.com.br/pmcachoeiro/legislacao/'
    window.open(url)
  }

  abrirDetrannet(){
    console.log('abrindo Detrannet...');
    const url = 'http://detrannet.es.gov.br/controleacesso/login.asp'
    window.open(url)
  }

  abrirCalendarioPagamento(){
    console.log('abrindo Calendário Pagamento...');
    this.router.navigate(['calendario-pagamento'])
  }

  abrirAgenda(){
    console.log('abrir Agenda');
    this.router.navigate(['agenda'])
  }




}
