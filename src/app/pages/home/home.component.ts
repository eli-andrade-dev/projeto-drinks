import { Component } from '@angular/core';
import { DrinksListMock } from '../../mocks/drinks-list.mock';
import { DrinkType } from '../../types/drinks.types.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public listaBebidas: DrinkType[] = [];

  constructor() {
    this.listaBebidas = DrinksListMock;
  }

  public filtrarBebidaPorNome(nome: string) {
    if(nome.length === 0) {
      this.listaBebidas = DrinksListMock;
      return;
    }
    this.listaBebidas = DrinksListMock.filter(beb => beb.name.toLowerCase().includes(nome.toLowerCase()));
  }
}