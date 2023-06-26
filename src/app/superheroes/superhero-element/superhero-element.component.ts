import {Component, Input, OnInit} from '@angular/core';
import {Superhero} from "./superhero-model";

@Component({
  selector: 'app-superhero-element',
  templateUrl: './superhero-element.component.html',
  styleUrls: ['./superhero-element.component.scss'],
})
export class SuperheroElementComponent  implements OnInit {


  @Input() superhero: Superhero = {
    id: "s1",
    name: "IronMan",
    description: "lorem ipsun",
    strength: 10,
    universe: "Marvel universe",
    imageUrl: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
  };
  constructor() { }

  ngOnInit() {}

}
