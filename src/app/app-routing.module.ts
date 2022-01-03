import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { SideJumpMenuComponent } from './side-jump-menu/side-jump-menu.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'main', component: SideJumpMenuComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
