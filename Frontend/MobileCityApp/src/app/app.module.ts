import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component';
import { ClientsCreateComponent } from './components/clients/clients-create/clients-create.component';
import { ClientsReadComponent } from './components/clients/clients-read/clients-read.component';
import { ClientsUpdateComponent } from './components/clients/clients-update/clients-update.component';
import { ClientsDeleteComponent } from './components/clients/clients-delete/clients-delete.component';
import { TransportsCrudComponent } from './views/transports-crud/transports-crud.component';
import { TransportsReadComponent } from './components/transports/transports-read/transports-read.component';
import { TransportsCreateComponent } from './components/transports/transports-create/transports-create.component';
import { TransportsUpdateComponent } from './components/transports/transports-update/transports-update.component';
import { TransportsDeleteComponent } from './components/transports/transports-delete/transports-delete.component';
import { RentsCrudComponent } from './views/rents-crud/rents-crud.component';
import { RentsReadComponent } from './components/rents/rents-read/rents-read.component';
import { RentsCreateComponent } from './components/rents/rents-create/rents-create.component';
import { ClientsDetailsComponent } from './components/clients/clients-details/clients-details.component';
import { LoginComponent } from './components/account/login/login.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { RentsUpdateComponent } from './components/rents/rents-update/rents-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClientsCrudComponent,
    TransportsCrudComponent,
    ClientsCreateComponent,
    ClientsReadComponent,
    ClientsUpdateComponent,
    ClientsDeleteComponent,
    TransportsReadComponent,
    TransportsCreateComponent,
    TransportsUpdateComponent,
    TransportsDeleteComponent,
    RentsCrudComponent,
    RentsReadComponent,
    RentsCreateComponent,
    ClientsDetailsComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    RentsUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
