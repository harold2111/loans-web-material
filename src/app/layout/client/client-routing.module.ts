import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client.component';
import { CreateClientComponent } from './components/create-client/create-client.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent
  },
  {
    path: 'createClient', component: CreateClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
