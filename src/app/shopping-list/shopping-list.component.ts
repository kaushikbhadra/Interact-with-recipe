import { Component } from '@angular/core';
import { Ingerdient } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingerdient[] = [
    new Ingerdient('panner', 250),
    new Ingerdient('haldi', 5),
  ];

  onIngredientAdd(ingredient: Ingerdient) {
    this.ingredients.push(ingredient);
  }
}
