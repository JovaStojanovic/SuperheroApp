import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysuperheroesPageRoutingModule } from './mysuperheroes-routing.module';

import { MysuperheroesPage } from './mysuperheroes.page';
import {SuperheroesPageModule} from "../superheroes/superheroes.module";
import {MysuperheroElementComponent} from "./mysuperhero-element/mysuperhero-element.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysuperheroesPageRoutingModule,
    SuperheroesPageModule
  ],
  declarations: [MysuperheroesPage, MysuperheroElementComponent]
})
export class MysuperheroesPageModule {}
