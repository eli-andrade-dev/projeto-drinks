import { Component, EventEmitter, Output } from '@angular/core';
import { DrinkFilterType } from 'src/app/types/drinks-filter.type';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public filtro: string = '';
  public sortOrder: string = 'DESC';
  public isAvailable: string = '';

  @Output() filtroEmitter: EventEmitter<DrinkFilterType> = 
  new EventEmitter<DrinkFilterType>();

  public buscarBebidaPorNome() {
    const filtroBebida: DrinkFilterType = {
      search: this.filtro,
      sort: this.sortOrder,
    };

    if (this.isAvailable.trim().length>0) {
     filtroBebida.isAvailable = this.isAvailable === 'true';
    }
    this.filtroEmitter.emit(filtroBebida);
    
    
  }

  public limparFiltro() {
    this.filtro = '';
    this.buscarBebidaPorNome();
  }
}