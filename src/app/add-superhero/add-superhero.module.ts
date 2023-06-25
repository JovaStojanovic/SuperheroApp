import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSuperheroPageRoutingModule } from './add-superhero-routing.module';

import { AddSuperheroPage } from './add-superhero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSuperheroPageRoutingModule
  ],
  declarations: [AddSuperheroPage]
})
export class AddSuperheroPageModule {}
