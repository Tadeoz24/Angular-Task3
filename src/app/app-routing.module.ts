import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './employee-register/add-user/add-user.component';
import { DeleteUserComponent } from './employee-register/delete-user/delete-user.component';
import { EditUserComponent } from './employee-register/edit-user/edit-user.component';
import { ListUsersComponent } from './employee-register/list-users/list-users.component';
import { ViewUserComponent } from './employee-register/view-user/view-user.component';

const routes: Routes = [
  {
    path: 'employee-register',
    children: [
      { path: '', component: ListUsersComponent },
      { path: 'list', component: ListUsersComponent },
      { path: 'delete/:id', component: DeleteUserComponent },
      { path: 'edit/:id', component: EditUserComponent },
      { path: 'view/:id', component: ViewUserComponent },
      { path: 'create', component: AddUserComponent },
    ],
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./roles/roles.module').then((m) => m.RolesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
