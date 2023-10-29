import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComingSoonComponent} from "./wartung/coming-soon/coming-soon.component";
import {NgOptimizedImage} from "@angular/common";
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ComingSoonComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        SharedComponentsModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatProgressBarModule,
        MatListModule,
        MatCheckboxModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
