import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Panner Tikka Masala',
      'made with cow milk product.',
      'https://live.staticflickr.com/7400/10213777266_d62f554fd0_b.jpg'
    ),
    new Recipe(
      'Bread Sandwitch',
      'made with wheat floor and add vegies product.',
      'https://media.citizen.co.za/wp-content/uploads/2022/11/club-sandwich.jpg'
    ),
    new Recipe(
      'Chicken Leg Curry',
      'made with chicken and few spices product.',
      'https://as1.ftcdn.net/v2/jpg/02/35/39/28/1000_F_235392875_cb19YhmNwIGEgCpiHLtH5hsYmszWsM5L.jpg'
    ),
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
