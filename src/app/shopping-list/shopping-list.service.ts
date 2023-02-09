import {Subject} from 'rxjs'
import { Ingerdient } from '../shared/ingredient-model';

export class ShoppingListService {
  
  ingredientChanged = new Subject<Ingerdient[]>();

  private ingredients: Ingerdient[] = [
    new Ingerdient('panner', 250),
    new Ingerdient('haldi', 5),
  ];

  setIngredient(ingredient: Ingerdient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngToShopList(ingredients: Ingerdient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
