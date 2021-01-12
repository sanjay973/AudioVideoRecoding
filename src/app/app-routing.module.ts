import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioModuleComponent } from './audio-module/audio-module.component';
import { NavigateComponent } from './navigate/navigate.component';
import { RecordModuleComponent } from './record-module/record-module.component';

const routes: Routes = [
  {path:'',component:NavigateComponent},
 {path:'video',component:RecordModuleComponent},
 {path:'audio',component:AudioModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
