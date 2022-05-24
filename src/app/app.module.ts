import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../material.module';

import { AppComponent } from './app.component';
import { StepperEditableExample } from './stepper-editable-example/stepper-editable-example';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    MaterialExampleModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: StepperEditableExample }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    StepperEditableExample,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
