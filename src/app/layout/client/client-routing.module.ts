import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { ClientAddressFormComponent } from './components/client-address-form/client-address-form.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'client-list', pathMatch: 'full'
  },
  {
    path: 'client-list', component: ClientListComponent
  },
  {
    path: 'client-form', component: ClientFormComponent
  },
  {
    path: 'client-form/:id', component: ClientFormComponent
  },
  {
    path: 'client-view/:id', component: ClientViewComponent
  },
  {
    path: 'client-address-form', component: ClientAddressFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
