import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = new Array();

  constructor() { }

  ngOnInit(): void {
    this.getProducts(2);
  }

  async getProducts(page: any) {
    const resposta = await fetch('http://localhost:8080/product/page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page: page })
    });

    const json = await resposta.json();

    json.forEach((repo: any) => {

      this.products.push({
        "id": repo.id,
        "nome": repo.nome,
        "preco": repo.preco,
        "numeracao": repo.numeracao,
        "cor": repo.cor,
        "palmilha_anti_odor": repo.palmilha_anti_odor ? "Possui" : "Não possui",
        "material": repo.material,
        "publico": repo.publico,
        "tipo_de_fechamento": repo.tipo_de_fechamento,
        "amortecedor": repo.amortecedor ? "Possui" : "Não possui",
        "brand_id": repo.brand_id,
        "image": "assets/images/" + repo.nome + ".jpg"
      });

    });
  }

}
