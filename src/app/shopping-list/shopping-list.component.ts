import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingerdient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingerdient[] = [];
  private ingChangeSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangeSub = this.shoppingListService.ingredientChanged.subscribe(
      (newIngredients: Ingerdient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }
}
