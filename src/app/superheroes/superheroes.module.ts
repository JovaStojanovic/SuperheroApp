import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperheroesPageRoutingModule } from './superheroes-routing.module';

import { SuperheroesPage } from './superheroes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperheroesPageRoutingModule
  ],
  declarations: [SuperheroesPage]
})
export class SuperheroesPageModule {}
