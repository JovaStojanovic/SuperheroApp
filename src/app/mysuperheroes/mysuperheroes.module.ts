import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysuperheroesPageRoutingModule } from './mysuperheroes-routing.module';

import { MysuperheroesPage } from './mysuperheroes.page';
import {SuperheroesPageModule} from "../superheroes/superheroes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysuperheroesPageRoutingModule,
    SuperheroesPageModule
  ],
  declarations: [MysuperheroesPage]
})
export class MysuperheroesPageModule {}
