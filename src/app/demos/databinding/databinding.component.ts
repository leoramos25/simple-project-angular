import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
})
export class DatabindingComponent {

  public nome: string = "";

  public contadorClique: number = 0;

  public urlImagem: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  subtrairContador() {
    this.contadorClique--;
  }
}
