import { Injectable } from '@angular/core';
import { Ingerdient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Panner Tikka Masala',
      'made with cow milk product.',
      'https://live.staticflickr.com/7400/10213777266_d62f554fd0_b.jpg',
      [
        new Ingerdient('Panner', 250),
        new Ingerdient('Milk', 100),
        new Ingerdient('Raw spices', 1),
        new Ingerdient('favorite vegiess pieces', 5),
      ]
    ),
    new Recipe(
      'Bread Sandwitch',
      'made with wheat floor and add vegies product.',
      'https://media.citizen.co.za/wp-content/uploads/2022/11/club-sandwich.jpg',
      [
        new Ingerdient('Bread', 250),
        new Ingerdient('Meonies', 10),
        new Ingerdient('Raw spices', 1),
        new Ingerdient('favorite vegiess pieces', 5),
      ]
    ),
    new Recipe(
      'Chicken Leg Curry',
      'made with chicken and few spices product.',
      'https://as1.ftcdn.net/v2/jpg/02/35/39/28/1000_F_235392875_cb19YhmNwIGEgCpiHLtH5hsYmszWsM5L.jpg',
      [
        new Ingerdient('Chicken Leg pieces', 250),
        new Ingerdient('curd', 50),
        new Ingerdient('Raw spices', 1),
        new Ingerdient('favorite vegiess pieces', 5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingerdient[]) {
    this.slService.addIngToShopList(ingredients);
  }
}
