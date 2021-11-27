import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLoginComponent } from './crud/create-login/create-login.component';
import { LoginPageComponent } from './crud/login-page/login-page.component';
import { PrincipalCrudComponent } from './crud/principal-crud/principal-crud.component';
import { PagErrorComponent } from './crud/principal-crud/guards/pag-error/pag-error.component';
import { GuardsGuard} from './crud/principal-crud/guards/guards.guard'

const routes: Routes = [
  {path:'login' , component: LoginPageComponent

  },
  {path:'principal' , component: PrincipalCrudComponent ,
  canActivate:[ GuardsGuard ] , canLoad: [GuardsGuard ]
},

  {path:'create' , component: CreateLoginComponent},
  {path:'error' , component: PagErrorComponent },
  {path: '**', redirectTo:'login' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
