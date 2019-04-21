import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StateviewComponent } from './stateview/stateview.component';
import { HotelviewComponent } from './hotelview/hotelview.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { DisplaydishesComponent } from './displaydishes/displaydishes.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    StateviewComponent,
    HotelviewComponent,
    AddhotelComponent,
    DisplaydishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
