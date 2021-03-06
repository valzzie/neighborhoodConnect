import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NeighborsComponent } from './neighbors/neighbors.component';
import { NeighborDetailsComponent } from './neighbor-details/neighbor-details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    //HomePageComponent
    path: '',
    component: HomePageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: HomePageComponent
  },
  {
    path: 'api/events',
    component: EventsListComponent
  },
  {
    //eventdetails component is populated by neighbors attending that specific event.
    path: 'eventdetails/:myId',
    component: EventDetailsComponent
  },
  {
    path: 'api/neighbors',
    component: NeighborsComponent
  },
  {
    path: 'neighbordetails/:myId',
    component: NeighborDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
