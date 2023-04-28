import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';
import { DASHBORDComponent } from './dashbord/dashbord.component';
import { REGISTRATIONComponent } from './registration/registration.component';
import { GALLERYComponent } from './gallery/gallery.component';
const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GALLERYComponent  },
  { path: 'registration', component: REGISTRATIONComponent},
  { path: 'aboutus', component:ABOUTUSComponent},
  { path: 'dashbord', component:DASHBORDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
