import { EventEmitter } from '@angular/core';
import { Ingerdient } from '../shared/ingredient-model';

export class ShoppingListService {
  
  ingredientChanged = new EventEmitter<Ingerdient[]>();

  private ingredients: Ingerdient[] = [
    new Ingerdient('panner', 250),
    new Ingerdient('haldi', 5),
  ];

  setIngredient(ingredient: Ingerdient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
