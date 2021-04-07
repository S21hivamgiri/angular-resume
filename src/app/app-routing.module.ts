import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SideJumpMenuComponent } from './side-jump-menu/side-jump-menu.component'
;
const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'main', component: SideJumpMenuComponent },
  { path: '**', component: HeaderComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
