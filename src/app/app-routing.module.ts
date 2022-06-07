import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my/my.component';
import { LogTestComponent } from './log-test/log-test.component';

const routes: Routes = [
  {path: 'my', component: MyComponent}
  {path: 'app', component: LogTestComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }