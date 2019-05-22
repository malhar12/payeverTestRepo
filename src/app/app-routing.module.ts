import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list-component/list.component';
import { UserComponent } from './components/user-component/user.component';

const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: 'user/:userId', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
