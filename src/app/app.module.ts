import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'


import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Solution to error is to cast window object as any.
//https://stackoverflow.com/questions/42193262/element-implicitly-has-an-any-type-because-type-window-has-no-index-signatur
let toastr:Toastr = window as any['toastr'];
let jQuery = window as any['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    CollapsibleWellComponent,


    DurationPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent)  {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you ereally want to cancel?');
  return true;
}
