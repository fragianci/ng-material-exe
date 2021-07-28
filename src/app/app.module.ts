import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomSnackbarComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
