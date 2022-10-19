import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewflightComponent } from './viewflight/viewflight.component';

const appRoutes:Routes=[
  {
    path:"",component:FlightComponent
  },
  {
    path:"view",component:ViewflightComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    NavbarComponent,
    ViewflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
