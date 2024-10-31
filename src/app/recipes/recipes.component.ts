import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipes:any[]=[]
  isLoading:boolean=true

  constructor(_RecipeService:RecipeService)
  {
    _RecipeService.getDataFromApi().subscribe(
      {
        next:(data)=>{this.recipes=data.recipes; console.log(this.recipes);
          this.isLoading=false },
        error:()=>{},
        complete:()=>{},


      }
    )
  }

}
