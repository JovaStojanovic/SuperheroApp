import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperheroesPageRoutingModule } from './superheroes-routing.module';

import { SuperheroesPage } from './superheroes.page';
import {SuperheroElementComponent} from "./superhero-element/superhero-element.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperheroesPageRoutingModule
  ],
  exports: [
    SuperheroElementComponent
  ],
  declarations: [SuperheroesPage, SuperheroElementComponent]
})
export class SuperheroesPageModule {}
