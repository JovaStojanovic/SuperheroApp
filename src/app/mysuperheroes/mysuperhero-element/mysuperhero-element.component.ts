import {Component, Input, OnInit} from '@angular/core';
import {Superhero} from "../../superheroes/superhero-element/superhero-model";

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
  constructor() { }

  ngOnInit() {}

}
