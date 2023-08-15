import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ModalController} from "@ionic/angular";
import {SuperheroServiceService} from "../superhero-service.service";
import {AuthService} from "../auth/auth.service";
import {Superhero} from "../superheroes/superhero-element/superhero-model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  superheroes: Superhero[];
  private _favoriteSub: Subscription;
  constructor(private modalCtrl: ModalController, private superheroService: SuperheroServiceService, private authService: AuthService) {
    this.superheroes = [];
    this._favoriteSub= new Subscription();
  }

  ngOnInit() {
    this.superheroService.getFavoritesById().subscribe((favoritesData)=>{
      this.superheroes = favoritesData;
      console.log(this.superheroes);
    });
  }

  ionViewWillEnter(){
    this.superheroService.getFavoritesById().subscribe((favoritesData)=>{
      this.superheroes = favoritesData;
      console.log(this.superheroes);
    });

  }
  deleteFavorite(superheroID: String, user_id: String) {
   /* this.superheroService.deleteFavorite(superheroID, user_id).subscribe(() =>{
      this.ngOnInit();
      this.ionViewWillEnter();
    });*/
  }

}
