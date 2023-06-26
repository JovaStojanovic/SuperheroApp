import { Component, OnInit } from '@angular/core';
import {SuperheroServiceService} from "../superhero-service.service";
import {Superhero} from "./superhero-element/superhero-model";

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.page.html',
  styleUrls: ['./superheroes.page.scss'],
})
export class SuperheroesPage implements OnInit {

  superheroes: Superhero[]=[];
  constructor(private superheroService: SuperheroServiceService) { }

  ngOnInit() {
    this.superheroService.getSuperheroes().subscribe((SuperheroData)=>{
      console.log(SuperheroData);
      const superheroes: Superhero[]=[];

      for(const key in SuperheroData){
        //provera da ne gleda nasledjene property-je
        if(SuperheroData.hasOwnProperty(key)){
          superheroes.push({
            id:key,
            name: SuperheroData[key].name,
            description: SuperheroData[key].description,
            strength: SuperheroData[key].strength,
            universe: SuperheroData[key].universe,
            imageUrl: SuperheroData[key].imageUrl
          });
        }
      }

      this.superheroes = superheroes;
    });
  }

}
