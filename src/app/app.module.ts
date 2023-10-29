import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComingSoonComponent} from "./wartung/coming-soon/coming-soon.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        ComingSoonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
