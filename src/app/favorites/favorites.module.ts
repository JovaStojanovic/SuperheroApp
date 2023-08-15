import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import {SuperheroesPageModule} from "../superheroes/superheroes.module";
import {FavoriteElementComponent} from "./favorite-element/favorite-element.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavoritesPageRoutingModule,
        SuperheroesPageModule
    ],
  declarations: [FavoritesPage, FavoriteElementComponent]
})
export class FavoritesPageModule {}
