import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientCreateEditComponent } from './components/client-create-edit/client-create-edit.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'client-list', pathMatch: 'full'
  },
  {
    path: 'client-list', component: ClientListComponent
  },
  {
    path: 'client-create-edit', component: ClientCreateEditComponent
  },
  {
    path: 'client-create-edit/:id', component: ClientCreateEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
