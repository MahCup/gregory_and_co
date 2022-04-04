import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand = {
    nome: ""
  }

  selected_brand = {
    nome: ""
  }

  brands = new Map();

  constructor() { }

  ngOnInit(): void {
    this.getBrands();
  }

  async addBrand() {
    const resposta = await fetch('http://localhost:8080/brand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.brand)
    });

    if (resposta.status === 201) {
      alert("Marca adicionada com sucesso.");
      window.location.reload();
    } else {
      alert("Não foi possível fazer o cadastro da marca.");
    }
  }

  async getBrands() {
    const brands = await fetch('http://localhost:8080/brand');
    const json = await brands.json();

    json.forEach((repo: any) => {

      this.brands.set(repo.id, repo.nome);
      // Object.entries(repo).forEach(([key, value]) => {
      //   console.log(`${key}: ${value}`);

      // });
    });
    // console.log(this.brands)
  }

  async delBrand() {
    const resposta = await fetch('http://localhost:8080/brand', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.selected_brand)
    });

    if (resposta.status === 200) {
      alert("Marca deletada com sucesso.");
      window.location.reload();
    } else {
      alert("Não foi possível deletar a marca.");
    }
  }
}
