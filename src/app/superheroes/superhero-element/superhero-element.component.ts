import {Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Superhero} from "./superhero-model";
import {AlertController} from "@ionic/angular";
import {AuthService} from "../../auth/auth.service";
import {SuperheroServiceService} from "../../superhero-service.service";
import {SuperheroesPage} from "../superheroes.page";

@Component({
  selector: 'app-superhero-element',
  templateUrl: './superhero-element.component.html',
  styleUrls: ['./superhero-element.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperheroElementComponent implements OnInit {

  mIName: string = "star-outline";
  @Input() superhero: Superhero = {
    id: "s1",
    name: "IronMan",
    description: "lorem ipsum",
    strength: 10,
    universe: "Marvel universe",
    imageUrl: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
    user_id: "9anSQbvku2SyIgTNTaale2lxtFv2",
    iconName: ""
  };
  constructor(private alertCtrl: AlertController, private authService: AuthService, private superheroService: SuperheroServiceService, private sp: SuperheroesPage) { }

  ngOnInit() {

  }

  ionViewWillEnter(){

  }
  setName(superheroID: string, iconName: string) {
    this.mIName = iconName;
  }

  status(id: string, name: string, description: string, strength: number, universe: string, imageUrl: string, iconName: string) {
  if(iconName == 'star-outline'){
    this.superheroService.addFavorite(id, this.authService.getUserId()).subscribe();
    this.sp.updateSuperheroIcon(id, name, description, strength, universe, imageUrl, "star");
  }  else{
    this.superheroService.deleteFavorite(id);
    this.sp.updateSuperheroIcon(id, name, description, strength, universe, imageUrl, "star-outline");
  }
}
/*status(superheroID: string):string{
  if(this.mIName == 'star-outline'){
    this.alertCtrl.create({
      header: "Saving superhero",
      message: "Are you sure you want to save this superhero on your favorite list?",
      buttons:[
        {
          text: 'Save',
          handler: () =>{
            this.superheroService.addFavorite(superheroID, this.authService.getUserId()).subscribe();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log('cancel');
          }
        }
      ]
    }).then((alert)=>{
      alert.present();
      //posto ova openAlert metoda vraca promise, moramo ovim then delom da se osiguramo da se ce prikazati sam alert
    });
    return "star";
  }  else{
    this.alertCtrl.create({
      header: "Remove superhero from favorites",
      message: "Are you sure you want to remove this superhero from your favorite list?",
      buttons:[
        {
          text: 'Remove',
          handler: () =>{
            this.superheroService.deleteFavorite(superheroID);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log('cancel');
          }
        }
      ]
    }).then((alert)=>{
      alert.present();
      //posto ova openAlert metoda vraca promise, moramo ovim then delom da se osiguramo da se ce prikazati sam alert
    });
    return "star-outline";
  }
}*/
  openAlert(){

    this.alertCtrl.create({
      header: "Saving superhero",
      message: "Are you sure you want to save this superhero on your favorite list?",
      buttons:[
        {
          text: 'Save',
          handler: () =>{
            console.log('Save it');

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log('cancel');
          }
        }
      ]
    }).then((alert)=>{
      alert.present();
      //posto ova openAlert metoda vraca promise, moramo ovim then delom da se osiguramo da se ce prikazati sam alert
    });
  }


}
