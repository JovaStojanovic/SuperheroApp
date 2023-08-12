import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'update-superhero.modal',
  templateUrl: './update-superhero.modal.component.html',
  styleUrls: ['./update-superhero.modal.component.scss'],
})

export class UpdateSuperheroModalComponent implements OnInit {

  @Input()  superheroName: String;
  @Input()  superheroDescription: String;
  @Input()  superheroStrength : String;
  @Input()  superheroUniverse : String;
  @Input()  superheroImageUrl : String;

    data: any[] = [
        {
            "DC":"DC",
            "Marvel":"Marvel"
        }
    ];
  // @ts-ignore
  @ViewChild("f", {static: true}) form: NgForm;
  constructor(private modalCtrl: ModalController, private authService: AuthService) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onUpdateSuperhero() {
    if(this.form.invalid) {
      return;
    }

    this.modalCtrl.dismiss({superheroData: {
        name: this.form.value['name'],
        description: this.form.value['description'],
        strength: this.form.value['strength'],
        universe: this.form.value['universe'],
        imageUrl: this.form.value['imageUrl'],
        user_id: this.authService.getUserId()
      }}, 'confirm');
  }

}
