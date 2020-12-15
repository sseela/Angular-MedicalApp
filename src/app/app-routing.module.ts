import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'entrance', loadChildren: 'C:/BPER/medicalApp/src/app/entrance/entrance.module#EntranceModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
