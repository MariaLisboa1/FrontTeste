import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Pag2Component } from './pag2/pag2.component';


const routes: Routes = [
  {path: '', component: MyProfileComponent},
  {path: 'pag2', component: Pag2Component}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

