import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CallCenterComponent} from './call-center/call-center.component';
import {HomeComponent} from './home/home.component';
import {ContractAdderComponent} from './contract-adder/contract-adder.component';
import {ContractDeleteComponent} from './contract-delete/contract-delete.component';
import {ContractUpdateComponent} from './contract-update/contract-update.component';
import {ContractViewComponent} from './contract-view/contract-view.component';

const routes: Routes = [
  { path: "home/call-center", component: CallCenterComponent },
  { path: "home", component: HomeComponent },
  {path: "home/contract-adder",component: ContractAdderComponent},
  {path: "home/contract-delete",component: ContractDeleteComponent},
  {path: "home/contract-update",component: ContractUpdateComponent},
  {path: "home/contract-view",component: ContractViewComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
