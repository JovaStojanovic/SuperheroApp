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

  private _superheroSub: Subscription;
  superheroes: Superhero[];
  constructor(private superheroService: SuperheroServiceService) {
    this.superheroes = [];
    this._superheroSub= new Subscription();

  }

  ngOnInit() {
  this._superheroSub = this.superheroService.superheroes.subscribe((superheroData)=>{
  this.superheroes = superheroData;
})
}

ionViewWillEnter(){
  this.superheroService.getSuperheroes().subscribe((superheroData)=>{
    this.superheroes = superheroData;
  });

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
