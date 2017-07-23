import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NeighborsComponent } from './neighbors/neighbors.component';
import { NeighborDetailsComponent } from './neighbor-details/neighbor-details.component';

const routes: Routes = [

  {
    //HomePageComponent
    path: '',
    component: HomePageComponent
  },
  {
    path: 'api/signup',
    component: HomePageComponent
  },
  {
    path: 'api/login',
    component: HomePageComponent
  },
  {
    path: 'api/events',
    component: EventsListComponent
  },
  {
    path: 'api/eventdetails',
    component: EventDetailsComponent
  },
  {
    path: 'api/neighbors',
    component: NeighborsComponent
  },
  {
    path: 'api/neighbordetails',
    component: NeighborDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
