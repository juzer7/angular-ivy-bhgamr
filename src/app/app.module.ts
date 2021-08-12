import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

import { DataPlatformComponent } from './data-platform/data-platform.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatSelectModule, RouterModule.forRoot([
    { path: '', component: AppComponent },
    { path: 'data-platform', component: DataPlatformComponent }
  ]) 
],
  declarations: [ AppComponent, HelloComponent, DataPlatformComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
