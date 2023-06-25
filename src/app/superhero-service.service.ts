import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface SuperheroData {
  name: String;
  description: String;
  strength: number;
  universe: String;
  imageUrl: String;
}


@Injectable({
  providedIn: 'root'
})
export class SuperheroServiceService {

  constructor(private http: HttpClient) { }

  addSuperhero(name: String,
  description: String,
  strength: number,
  universe: String,
  imageUrl: String){
    return this.http.post<{id: string}>('https://superhero-app-5c948-default-rtdb.firebaseio.com/superheroes.json', {
      name, description, strength, universe, imageUrl
    })
  }

  getSuperheroes(){
    return this.http.get<{[key: string]: SuperheroData}>('https://superhero-app-5c948-default-rtdb.firebaseio.com/superheroes.json');
  }


}
