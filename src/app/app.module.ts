import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TestManualComponent} from './test/test-manual.component';
import { TestCliComponent } from './test/test-cli.component';
import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,TestManualComponent, TestCliComponent, EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,TestManualComponent]
})
export class AppModule { }
