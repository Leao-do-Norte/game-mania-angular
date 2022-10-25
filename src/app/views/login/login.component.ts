import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User();

  mensagem = ""

  receberDados() {
    //BLACKLIST
    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", " group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]
    listaPalavras.forEach(palavra=>{
      if(this.userModel.email?.toLowerCase().includes(palavra)){
        this.mensagem = "Dados inválidos: " + palavra

        return;
      }
    });

    //MENSAGEM DE AUTENTICAÇÃO DO EMAIL
    this.loginService.login (this.userModel).subscribe((response) => {
    console.log("Deu certo") 
    this.router.navigateByUrl("/")
    }, 
    (respostaErro) => {
      if (respostaErro.error == "Email and password are required"){
        this.mensagem = "Email e senha são obrigatórios"
      } else if (respostaErro == "Incorrect password") {
        this.mensagem = "Senha incorreta"
      } else {
        this.mensagem = respostaErro.error
      }
    })

  }

}
