import { Component, ElementRef, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

import { Ingerdient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  
  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingerdient(value.name, value.amount);
    this.shoppingListService.setIngredient(newIngredient);
  }
}
