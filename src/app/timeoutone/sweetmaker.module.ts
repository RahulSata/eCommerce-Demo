import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetMakerRoutingModule } from './sweetmaker-routing.module';
import { SweetMakerComponent } from './sweet-maker/sweet-maker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SweetMakerComponent
  ],
  imports: [
    CommonModule,
    SweetMakerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SweetMakerModule { }
