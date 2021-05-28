import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonLdModule } from '@mintplayer/ng-json-ld';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonLdModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
