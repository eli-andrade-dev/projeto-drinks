import { Component, Input } from '@angular/core';
import { DrinkType } from '../../types/drinks.types.component';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {
  @Input() bebida!: DrinkType;

  
}
