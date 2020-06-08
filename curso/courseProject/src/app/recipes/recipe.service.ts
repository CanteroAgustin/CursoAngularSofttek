import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppinListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // private recipes: Recipe[] = [
  //   new Recipe("Test Recipe", "This is a sample test", "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
  //   new Recipe("Pizza Casera", "La mas rica", "https://cdn.pixabay.com/photo/2020/01/20/00/08/pizza-4779230_960_720.jpg", [new Ingredient('Harina', 1), new Ingredient('Queso', 2)])
  // ];
  private recipes: Recipe[] = [];

  recipesChanged = new Subject<Recipe[]>();

  constructor(
    private store: Store<fromApp.AppState>) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch(new ShoppinListActions.AddIngredients(ingredients))
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
