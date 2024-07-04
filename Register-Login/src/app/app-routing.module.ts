import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { guardGuard } from './guards/guard.guard';


const routes: Routes = [
  { path:"", redirectTo: 'login', pathMatch: 'full' },
  { path:"home", component: HomeComponent,
    canActivate: [ guardGuard ] },
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  { path:"**", redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
