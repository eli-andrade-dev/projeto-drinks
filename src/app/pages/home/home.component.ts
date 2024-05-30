import { Component } from '@angular/core';
import { DrinkType } from '../../types/drinks.types.component';
import { DrinksService } from 'src/app/services/services';
import { DrinkFilterType } from '../../types/drinks-filter.type';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public listaBebidas: DrinkType[] = [];
  
  constructor(
    private _drinkService: DrinksService,
    private _router: Router
){
  this.filtrarBebidaPorNome();
}
public filtrarBebidaPorNome(filtro?: DrinkFilterType) {
  this._drinkService.getListaBebidas(filtro).subscribe({
    next: (resp) => {
      this.listaBebidas = resp;
      console.log('next');
    },
    error: (err) => {
      console.log(err);
      console.log('error');
    },
    complete: () => {
      console.log('complete');
    },
  });
}

public getDetalhesEquipamento(id: string) {
  this._router.navigate([`/details/${id}`]);
}
}