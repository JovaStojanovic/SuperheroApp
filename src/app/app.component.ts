import { Component } from '@angular/core';
import {AddSuperheroModalComponent} from "./add-superhero.modal/add-superhero.modal.component";
import {ModalController} from "@ionic/angular";
import {SuperheroServiceService} from "./superhero-service.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalCtrl: ModalController, private superheroService: SuperheroServiceService) {}

  openModal(){
    this.modalCtrl.create({
      component: AddSuperheroModalComponent
    }).then((modal: HTMLIonModalElement) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
        if(resultData.role === 'confirm') {
          console.log(resultData);
          this.superheroService.addSuperhero(
            resultData.data.superheroData.name,
            resultData.data.superheroData.description,
            resultData.data.superheroData.strength,
            resultData.data.superheroData.universe,
            resultData.data.superheroData.imageUrl).subscribe((res) =>{
              console.log(res);
          })
        }
    })
  }
}
