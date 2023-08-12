import {Component, Input, OnInit} from '@angular/core';
import {Superhero} from "../../superheroes/superhero-element/superhero-model";
import {SuperheroServiceService} from "../../superhero-service.service";
import {MysuperheroesPage} from "../mysuperheroes.page";
import {AlertController, ModalController} from "@ionic/angular";
import {AddSuperheroModalComponent} from "../../add-superhero.modal/add-superhero.modal.component";
import {UpdateSuperheroModalComponent} from "../../update-superhero.modal/update-superhero.modal.component";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-mysuperhero-element',
  templateUrl: './mysuperhero-element.component.html',
  styleUrls: ['./mysuperhero-element.component.scss'],
})

export class MysuperheroElementComponent  implements OnInit {

  @Input() superhero: Superhero = {
    id: "s1",
    name: "IronMan",
    description: "lorem ipsum",
    strength: 10,
    universe: "Marvel universe",
    imageUrl: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
    user_id: "9anSQbvku2SyIgTNTaale2lxtFv2"
  }
  constructor(private msp: MysuperheroesPage, private alertCtrl: AlertController, private modalCtrl: ModalController, private superheroService: SuperheroServiceService, private authService: AuthService) { }

  ngOnInit() {}

  deleteSuperhero(superheroID: String) {
    this.alertCtrl.create({
      header: "Deleting superhero",
      message: "Are you sure you want to delete this superhero from your list?",
      buttons:[
        {
          text: 'Delete',
          handler: () =>{
            console.log('Delete');
            this.msp.deleteSuperhero(superheroID);
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

  updateSuperhero(id: string, name: String, description: String, strength: number, universe: String, imageUrl: String) {
    this.msp.updateSuperhero(id, name, description, strength, universe, imageUrl);
  }
}
