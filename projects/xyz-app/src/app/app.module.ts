import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Feature1Module } from 'projects/feature1/src/public-api';
import { Feature2Module } from 'projects/feature2/src/public-api';
import { TestComComponent } from './TestCom/TestCom.component';
@NgModule({
  declarations: [	
    AppComponent,
      TestComComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Feature1Module,
    Feature2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
