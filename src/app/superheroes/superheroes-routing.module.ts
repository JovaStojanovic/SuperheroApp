import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroesPage } from './superheroes.page';

const routes: Routes = [
  {
    path: '',
    component: SuperheroesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroesPageRoutingModule {}
