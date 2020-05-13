import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is a sample test", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
