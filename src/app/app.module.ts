import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevaraComponent } from './devara/devara/devara.component';
import { TemperComponent } from './Temper/temper/temper.component';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DevaraComponent,
    TemperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
