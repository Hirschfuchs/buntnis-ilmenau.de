import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComingSoonComponent} from "./wartung/coming-soon/coming-soon.component";
import {NgOptimizedImage} from "@angular/common";
import { SharedComponentsModule } from './shared/components/shared-components.module';

@NgModule({
    declarations: [
        AppComponent,
        ComingSoonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        SharedComponentsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
