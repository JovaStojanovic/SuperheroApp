import {Component, Input, OnInit} from '@angular/core';
import {Superhero} from "./superhero-model";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-superhero-element',
  templateUrl: './superhero-element.component.html',
  styleUrls: ['./superhero-element.component.scss'],
})
export class SuperheroElementComponent implements OnInit {


  @Input() superhero: Superhero = {
    id: "s1",
    name: "IronMan",
    description: "lorem ipsun",
    strength: 10,
    universe: "Marvel universe",
    imageUrl: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
  };
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {}

  openAlert(){

    this.alertCtrl.create({
      header: "Saving superhero",
      message: "Are you sure you want to save this superhero on your saving list?",
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
