import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { Routes, RouterModule } from "@angular/router";

const routes : Routes = [
  {
    path : "",
    component : CustomersComponent
    
  }
]

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomersModule { }
