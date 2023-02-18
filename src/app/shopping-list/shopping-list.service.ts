import { Subject } from 'rxjs';
import { Ingerdient } from '../shared/ingredient-model';

export class ShoppingListService {
  ingredientChanged = new Subject<Ingerdient[]>();
  startEditing = new Subject<number>();

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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngToShopList(ingredients: Ingerdient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingerdient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
