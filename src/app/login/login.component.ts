import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log_user = {
    cpf: "",
    senha: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.log_user.cpf == "10825180694" && this.log_user.senha == "admin") {
      window.location.href = "admin";
    } else {
      console.log("Entrar")
    }
  }

}
