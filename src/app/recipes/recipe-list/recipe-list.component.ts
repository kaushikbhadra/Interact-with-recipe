import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("panner tikka masala", "made with cow milk product.", "https://live.staticflickr.com/7400/10213777266_d62f554fd0_b.jpg"),
    new Recipe("panner tikka masala", "made with cow milk product.", "https://live.staticflickr.com/7400/10213777266_d62f554fd0_b.jpg"),
    new Recipe("panner tikka masala", "made with cow milk product.", "https://live.staticflickr.com/7400/10213777266_d62f554fd0_b.jpg"),
    new Recipe("panner tikka masala", "made with cow milk product.", "https://live.staticflickr.com/7400/10213777266_d62f554fd0_b.jpg"),
    new Recipe("panner tikka masala", "made with cow milk product.", "https://live.staticflickr.com/7400/10213777266_d62f554fd0_b.jpg")
  ];
}
 