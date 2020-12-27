import { Component } from '@angular/core'
import { ClientesModule } from '../clientes/clientes.module';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {

  nome: string;
  clientes: Cliente[];

  constructor() {
    this.nome = 'Rafael';

    let cliente1 = new Cliente('Fulano', 30);
    let cliente2 = new Cliente('Ciclano', 45);

    this.clientes = [cliente1, cliente2];
  }

}
  class Cliente {

    constructor(
        public nome: string,
        public idade: number) {
    }

}
