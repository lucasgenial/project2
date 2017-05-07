import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModBarPrincipalModule } from './mod-bar-principal/mod-bar-principal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModBarPrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }