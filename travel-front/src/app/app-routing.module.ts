import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CallCenterComponent} from './call-center/call-center.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: "home/call-center", component: CallCenterComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
