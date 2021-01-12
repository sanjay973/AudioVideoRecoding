import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordModuleComponent } from './record-module/record-module.component';
import { NavigateComponent } from './navigate/navigate.component';
import { AudioModuleComponent } from './audio-module/audio-module.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordModuleComponent,
    NavigateComponent,
    AudioModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
