import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  // }

  // o objetivo da função abaixo era que fosse executada após o carregamento do site,
  // mas está está acontecendo antes

  ngOnInit(): void {

    // let r = confirm("Seja bem-vindo ao Game Mania! \nDeseja se inscrever na nossa Newsletter e aproveitar as melhores promoções?");
    // if (r == true){
    //     prompt("Digite seu e-mail e fique por dentro das novidades!")
    //   }
  }

  consultarFrete(){
    let x;
    let cep = Number(prompt("Digite seu cep (somente números) para consultar o valor e tempo de entrega:"));

    if(cep == 50721050){
        // cep fictício
        x = alert("Envio padrão: 5 - 8 dias úteis\nEntrega relâmpago: 2 dias úteis")
        return true
    }else{
        x = alert("CEP inválido")
        return false
    }
  }
}
