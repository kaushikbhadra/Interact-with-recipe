import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private url: string =
    'https://interact-with-recipe-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeData() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchData() {
    return this.http.get<Recipe[]>(this.url).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipe(recipes);
      })
    );
  }
}
