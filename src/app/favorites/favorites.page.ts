import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ModalController} from "@ionic/angular";
import {SuperheroServiceService} from "../superhero-service.service";
import {Superhero} from "../superheroes/superhero-element/superhero-model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  superheroes: Superhero[];
  private _favoriteSub: Subscription;
  constructor(private modalCtrl: ModalController, private superheroService: SuperheroServiceService) {
    this.superheroes = [];
    this._favoriteSub= new Subscription();
  }

  ngOnInit() {
    this.superheroService.getFavoritesById().subscribe((favoritesData)=>{
      this.superheroes = favoritesData;
      console.log(this.superheroes);
    });
  }

  deleteFavorite(superheroID: string) {
   this.superheroService.deleteFavorite(superheroID);
  }

}
