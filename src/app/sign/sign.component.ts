import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  user = {
    cpf: "",
    nome_completo: "",
    genero: "",
    email: "",
    senha: "",
    telefone: "",
    celular: "",
  }

  constructor() { }

  ngOnInit(): void {
  }
  // Esse metodo faz o get dos users
  // async onSubmitSignUp() {
  //   console.log(this.user);
  //   const retorno = await fetch('http://localhost:8080/user');
  //   console.log(await retorno.json())
  // }

  async onSubmitSignUp() {
    const resposta = await fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.user)
    });
    
    if(resposta.status === 201) {
      window.location.href = "login";
    } else {
      alert("Não foi possível fazer o cadastro, tente novamente mais tarde.")
    }
  }

}

