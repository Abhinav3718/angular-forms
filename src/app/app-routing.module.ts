import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgFormsComponent } from './ng-forms/ng-forms.component';

const routes: Routes = [
  {
    path: 'angular-forms',
    component: NgFormsComponent
  },
  {
    path: 'reactive-forms',
    component: NgFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
