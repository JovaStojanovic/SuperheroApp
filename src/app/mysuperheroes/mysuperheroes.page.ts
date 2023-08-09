import { Component, OnInit } from '@angular/core';
import {AddSuperheroModalComponent} from "../add-superhero.modal/add-superhero.modal.component";
import {ModalController} from "@ionic/angular";
import {SuperheroServiceService} from "../superhero-service.service";
import {AuthService} from "../auth/auth.service";
import {Superhero} from "../superheroes/superhero-element/superhero-model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-mysuperheroes',
  templateUrl: './mysuperheroes.page.html',
  styleUrls: ['./mysuperheroes.page.scss'],
})
export class MysuperheroesPage implements OnInit {
  superheroes: Superhero[];
  private _superheroSub: Subscription;
  superherosById: Superhero[];
  constructor(private modalCtrl: ModalController, private superheroService: SuperheroServiceService, private authService: AuthService) {
    this.superheroes = [];
    this.superherosById=[];
    this._superheroSub= new Subscription();
  }

  ngOnInit() {
    this._superheroSub = this.superheroService.superheroes.subscribe((superheroData)=>{
      this.superheroes = superheroData;
    })
  }
  ionViewWillEnter(){
    this.superheroService.getSuperheroesById().subscribe((superheroData)=>{
      this.superheroes = superheroData;
    });

  }


  openModal(){
    this.modalCtrl.create({
      component: AddSuperheroModalComponent
    }).then((modal: HTMLIonModalElement) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if(resultData.role === 'confirm') {
        console.log(resultData);
        //povratna vrednost ove POST metode je Observable pa zato moramo da se subscribe-ujemo i da definisemo next fju
        //odnosno sta treba da se desi kad se superhero sacuva na firebase-u
        this.superheroService.addSuperhero(
            resultData.data.superheroData.name,
            resultData.data.superheroData.description,
            resultData.data.superheroData.strength,
            resultData.data.superheroData.universe,
            resultData.data.superheroData.imageUrl,
            this.authService.getUserId()).subscribe((res) =>{
          console.log(res);
        })
      }
    })
  }
}
