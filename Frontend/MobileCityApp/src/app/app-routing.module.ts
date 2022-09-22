import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthGuard } from './components/account/shared/auth.guard';
import { ClientsCreateComponent } from './components/clients/clients-create/clients-create.component';
import { ClientsDeleteComponent } from './components/clients/clients-delete/clients-delete.component';
import { ClientsDetailsComponent } from './components/clients/clients-details/clients-details.component';
import { ClientsUpdateComponent } from './components/clients/clients-update/clients-update.component';
import { RentsCreateComponent } from './components/rents/rents-create/rents-create.component';
import { RentsUpdateComponent } from './components/rents/rents-update/rents-update.component';
import { TransportsCreateComponent } from './components/transports/transports-create/transports-create.component';
import { TransportsDeleteComponent } from './components/transports/transports-delete/transports-delete.component';
import { TransportsUpdateComponent } from './components/transports/transports-update/transports-update.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component';
import { HomeComponent } from './views/home/home.component';
import { RentsCrudComponent } from './views/rents-crud/rents-crud.component';
import { TransportsCrudComponent } from './views/transports-crud/transports-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
  children:[
    {
      path: "clients",
      component: ClientsCrudComponent
    },
    {
      path: "clients/create",
      component: ClientsCreateComponent
    },
    {
      path: "clients/update/:id",
      component: ClientsUpdateComponent
    },
    {
      path: "clients/delete/:id",
      component: ClientsDeleteComponent
    },
    {
      path: "clients/:id",
      component: ClientsDetailsComponent
    },
    {
      path: "transports",
      component: TransportsCrudComponent
    },
    {
      path: "transports/create",
      component: TransportsCreateComponent
    },
    {
      path: "transports/update/:id",
      component: TransportsUpdateComponent
    },
    {
      path: "transports/delete/:id",
      component: TransportsDeleteComponent
    },
    {
      path: "rents",
      component: RentsCrudComponent
    },
    {
      path: "rents/create",
      component: RentsCreateComponent
    },
    {
      path: "rents/:id",
      component: RentsUpdateComponent
    }
  ],
  canActivate:[AuthGuard]
},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'create-account', component: CreateAccountComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
