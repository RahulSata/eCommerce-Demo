import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetMakerComponent } from './sweet-maker/sweet-maker.component';

const routes: Routes = [
  {
    path: '',
    component: SweetMakerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweetMakerRoutingModule { }
