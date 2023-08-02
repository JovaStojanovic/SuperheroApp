import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysuperheroesPage } from './mysuperheroes.page';

const routes: Routes = [
  {
    path: '',
    component: MysuperheroesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysuperheroesPageRoutingModule {}
