import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DASHBORDComponent } from './dashbord/dashbord.component';
import { GALLERYComponent } from './gallery/gallery.component';
import { REGISTRATIONComponent } from './registration/registration.component';
import { ABOUTUSComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DASHBORDComponent,
    GALLERYComponent,
    REGISTRATIONComponent,
    ABOUTUSComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
