import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-superhero.modal',
  templateUrl: './add-superhero.modal.component.html',
  styleUrls: ['./add-superhero.modal.component.scss'],
})
export class AddSuperheroModalComponent  implements OnInit {

  // @ts-ignore
  @ViewChild("f", {static: true}) form: NgForm;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddSuperhero() {
    if(this.form.invalid) {
      return;
    }

    this.modalCtrl.dismiss({superheroData: {
        name: this.form.value['name'],
        description: this.form.value['description'],
        strength: this.form.value['strength'],
        universe: this.form.value['universe'],
        imageUrl: this.form.value['imageUrl']
      }}, 'confirm');



  }

}
