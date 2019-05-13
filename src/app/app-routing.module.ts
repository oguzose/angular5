import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core/src/metadata/directives';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
