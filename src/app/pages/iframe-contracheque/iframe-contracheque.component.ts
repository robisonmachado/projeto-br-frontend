import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-iframe-contracheque',
  templateUrl: './iframe-contracheque.component.html',
  styleUrls: ['./iframe-contracheque.component.scss']
})
export class IframeContrachequeComponent {

  url: string = 'https://contracheque.cachoeiro.es.gov.br/portal/login'

  voltar(){
    history.back()
  }

}
