import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './crud/login-page/login-page.component';
import { EditarComponent } from './crud/principal-crud/editar/editar.component';
import { PrincipalCrudComponent } from './crud/principal-crud/principal-crud.component';
import { RegistroComponent } from './crud/principal-crud/registro/registro.component';
import { CreateLoginComponent } from './crud/create-login/create-login.component';
import { PagErrorComponent } from './crud/principal-crud/guards/pag-error/pag-error.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalCrudComponent,
    EditarComponent,
    RegistroComponent,
    LoginPageComponent,
    CreateLoginComponent,
    PagErrorComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
