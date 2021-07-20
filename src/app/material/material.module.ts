import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon'

const matComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
]

@NgModule({
  imports: [
    matComponents
  ],
  exports: [
    matComponents
  ]
})
export class MaterialModule { }
