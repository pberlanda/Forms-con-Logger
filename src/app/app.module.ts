import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LogService } from './shared/log.service';
import { LogTestComponent } from './log-test/log-test.component';
import { MyComponent } from './my/my.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LogTestComponent, MyComponent ],
  bootstrap:    [ AppComponent ],
  /*providers:    [ LogService ] questa sintassi non serve perche il LogService è providedIn by root (vedi definizione del servizio)*/
})
export class AppModule { }
