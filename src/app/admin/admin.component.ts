import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  marcaService() {
    window.location.href = "brand";
  }
  produtoService() {
    window.location.href = "product";
  }
  estoqueService() {
    window.location.href = "inventory";
  }
}
