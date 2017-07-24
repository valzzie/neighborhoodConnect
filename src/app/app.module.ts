import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NeighborsComponent } from './neighbors/neighbors.component';
import { NeighborDetailsComponent } from './neighbor-details/neighbor-details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventsListComponent,
    EventDetailsComponent,
    NeighborsComponent,
    NeighborDetailsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
