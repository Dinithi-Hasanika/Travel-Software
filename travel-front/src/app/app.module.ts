import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { ContractAdderComponent } from './contract-adder/contract-adder.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { ContractUpdateComponent } from './contract-update/contract-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CallCenterComponent,
    ContractAdderComponent,
    ContractDeleteComponent,
    ContractViewComponent,
    ContractUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }