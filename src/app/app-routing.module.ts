import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { StateviewComponent } from './stateview/stateview.component';
import { HotelviewComponent } from './hotelview/hotelview.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { DisplaydishesComponent } from './displaydishes/displaydishes.component';
const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent,
    children: [
      { path: 'stateview', component: StateviewComponent },
      { path: 'hotelview', component: HotelviewComponent },
      {path: 'addhotel', component: AddhotelComponent}
    ]
  },
  { path: '', component: LoginComponent },
  {path: 'display/:id', component: DisplaydishesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
