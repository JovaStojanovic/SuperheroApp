import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSuperheroPage } from './add-superhero.page';

const routes: Routes = [
  {
    path: '',
    component: AddSuperheroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSuperheroPageRoutingModule {}
