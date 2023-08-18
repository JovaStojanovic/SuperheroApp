import {Component, Input, OnInit} from '@angular/core';
import {Superhero} from "../../superheroes/superhero-element/superhero-model";
import {Favorite} from "./favorite-model";

@Component({
  selector: 'app-favorite-element',
  templateUrl: './favorite-element.component.html',
  styleUrls: ['./favorite-element.component.scss'],
})
export class FavoriteElementComponent  implements OnInit {
  @Input() superhero: Superhero = {
    id: "",
    name: "",
    description: "",
    strength: 10,
    universe: " ",
    imageUrl: "",
    user_id: "",
    iconName: ""
  }
  @Input() favorite: Favorite = {
    id: "",
    superheroID: "",
    user_id: ""
  }

  constructor() {
  }

  ngOnInit() {
  }

}
