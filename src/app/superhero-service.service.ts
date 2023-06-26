import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map,tap} from "rxjs";
import {Superhero} from "./superheroes/superhero-element/superhero-model";

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

  private _superheroes = new BehaviorSubject<Superhero[]>([])

  get superheroes(){
    return this._superheroes.asObservable();
  }
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


  //vraca objekat u formatu {"id1": {superhero1},"id2": {superhero2}...  }
  //superhero1 i superhero2 prate strukturu interfejsa SuperheroData
  //id dodeljuje sam firebase
  getSuperheroes(){
    return this.http.get<{[key: string]: SuperheroData}>('https://superhero-app-5c948-default-rtdb.firebaseio.com/superheroes.json')
      .pipe(map((superheroData)=>{
        console.log(superheroData);
        const superheroes: Superhero[]=[];

        for(const key in superheroData){
          //provera da ne gleda nasledjene property-je
          if(superheroData.hasOwnProperty(key)){
            superheroes.push({
              id:key,
              name: superheroData[key].name,
              description: superheroData[key].description,
              strength: superheroData[key].strength,
              universe: superheroData[key].universe,
              imageUrl: superheroData[key].imageUrl
            });
          }
        }

        return superheroes;
      }),
      tap((superheroes)=>{
        this._superheroes.next(superheroes);


    }));
  }


}
