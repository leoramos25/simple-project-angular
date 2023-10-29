import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../Produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe({
        next: produtos => this.produtos = produtos,
        error: error => console.log(error),
      });
  }
}
