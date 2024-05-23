import { Component, Input } from '@angular/core';
import { DrinkType } from '../../types/drinks.types.component';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.css']
})
export class DrinksListComponent {
  @Input() listaBebidas: DrinkType[] = [];
}
