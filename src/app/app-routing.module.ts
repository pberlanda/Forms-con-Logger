import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my/my.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'my', component: MyComponent}
  {path: 'app', component: AppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }