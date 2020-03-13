import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { AboutDetailComponent } from './component/about/about-detail/about-detail.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    AboutDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
