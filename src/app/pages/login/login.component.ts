import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  cpf?: string
  senha?: string

  constructor(private router: Router){

  }

  entrar(){
    console.log('entrar...', this.cpf, this.senha);

    const loginOK = this.cpf == '1' && this.senha == '2';

    if(loginOK){
      this.router.navigate(['dashboard'])
    }

  }

  esqueciSenha(){
    console.log('esqueci a senha...');
  }
}
