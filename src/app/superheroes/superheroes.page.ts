import {Component, OnDestroy, OnInit} from '@angular/core';
import {SuperheroServiceService} from "../superhero-service.service";
import {Superhero} from "./superhero-element/superhero-model";
import {Subscription} from "rxjs";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.page.html',
  styleUrls: ['./superheroes.page.scss'],
})
export class SuperheroesPage implements OnInit,OnDestroy, ViewWillEnter {
searchTerm:string;
filteredSuperheroes: Superhero[]=[];

  private _superheroSub: Subscription;
  superheroes: Superhero[];
  constructor(private superheroService: SuperheroServiceService) {
    this.superheroes = [];
    this._superheroSub= new Subscription();

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
openModal(){
    console.log("search")
}
ngOnDestroy(){
    if(this._superheroSub){
      this._superheroSub.unsubscribe();
    }
}



}
