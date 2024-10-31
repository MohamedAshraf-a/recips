import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _HttpClient:HttpClient) 
  {

   



   }
    getDataFromApi():Observable<any>{

    return this._HttpClient.get("https://forkify-api.herokuapp.com/api/search?q=pizza")
   }

}
