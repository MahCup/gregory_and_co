import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {
    nome: "",
    preco: "",
    numeracao: "",
    cor: "",
    palmilha_anti_odor: "",
    material: "",
    publico: "",
    tipo_de_fechamento: "",
    amortecedor: "",
    brand_id: ""
  }

  selected_product = {
    id: ""
  }

  brands = new Map();
  products = new Array();

  constructor() { }

  ngOnInit(): void {
    this.getBrands();
    this.getProducts();
  }

  goBack() {
    window.location.href = "admin";
  }

  async addProduct() {
    console.log(this.product);
    const resposta = await fetch('http://localhost:8080/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.product)
    });

    if (resposta.status === 201) {
      alert("Produto adicionado com sucesso.");
      window.location.reload();
    } else {
      alert("Não foi possível fazer o cadastro do produto.");
    }
  }

  async getProducts() {
    const products = await fetch('http://localhost:8080/product/list');
    const json = await products.json();

    json.forEach((repo: any) => {
      this.getBrandById(repo.brand_id).then(res => {
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
          "brand_id": res
        });
      })
    });
  }

  async getBrands() {
    const brands = await fetch('http://localhost:8080/brand/list');
    const json = await brands.json();

    json.forEach((repo: any) => {
      this.brands.set(repo.id, repo.nome);
    });
  }


  async getBrandById(ID: any) {
    const brand = await fetch('http://localhost:8080/brand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: ID })
    });

    const json = await brand.json();
    return json.nome;
  }

  async delProduct() {
    const resposta = await fetch('http://localhost:8080/product', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.selected_product)
    });

    if (resposta.status === 200) {
      alert("Marca deletada com sucesso.");
      window.location.reload();
    } else {
      alert("Não foi possível deletar a marca.");
    }
  }
}
