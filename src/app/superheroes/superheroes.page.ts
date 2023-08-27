import {Component, OnDestroy, OnInit} from '@angular/core';
import {SuperheroServiceService} from "../superhero-service.service";
import {Superhero} from "./superhero-element/superhero-model";
import {Subscription} from "rxjs";
import {ViewWillEnter} from "@ionic/angular";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.page.html',
  styleUrls: ['./superheroes.page.scss'],
})
export class SuperheroesPage implements OnInit,OnDestroy, ViewWillEnter {
searchTerm:string;
filteredSuperheroes: Superhero[]=[];

  private _superheroSub: Subscription;
  private _favorites: Subscription;
  superheroes: Superhero[];
  favorites: Superhero[];
  iconName: string;
  constructor(private superheroService: SuperheroServiceService, private authService: AuthService) {
    this.superheroes = [];
    this._superheroSub= new Subscription();
    this._favorites = new Subscription();
  }

  ngOnInit() {
  this._superheroSub = this.superheroService.superheroes.subscribe((superheroData)=>{
  this.superheroes = superheroData;
  this.filteredSuperheroes = this.superheroes;
})
}

ionViewWillEnter(){
  this.superheroService.getSuperheroes().subscribe((superheroData)=>{
    this.superheroes = superheroData;
    this.filteredSuperheroes = this.superheroes;
  });
}
  filterResults(search:String){

    if(!search){
      this.filteredSuperheroes= this.superheroes;
    }
    this.filteredSuperheroes = this.superheroes.filter(superhero => superhero?.name.toLowerCase().includes(search.toLowerCase()));
  }

ngOnDestroy(){
    if(this._superheroSub){
      this._superheroSub.unsubscribe();
    }
}


  updateSuperheroIcon(id: string, nameS: string, descriptionS: string, strengthS: number, universeS: string, imageUrlS: string, iconNameS: string) {
    this.superheroService.updateSuperhero(
        id,
        {name: nameS,
          description: descriptionS,
          strength: strengthS,
          universe: universeS,
          imageUrl: imageUrlS,

          iconName: iconNameS}
    ).subscribe(() =>{
      this.ngOnInit();
      this.ionViewWillEnter();
    })
  }
}
