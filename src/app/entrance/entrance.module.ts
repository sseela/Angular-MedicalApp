import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: BookingComponent}
];


@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntranceModule { }
