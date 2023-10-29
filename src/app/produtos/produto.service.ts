import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  protected urlServiceV1: string = "http://localhost:3000/";

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlServiceV1 + "produtos");
  }
}
