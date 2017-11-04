import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import {DishService} from "./services/dish.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {LeaderService} from "./services/leader.service";
import {AboutComponent} from "./about/about.component";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [DishService, LeaderService],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
