import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PostModule } from './layout/post/post.module';
import { UserModule } from './layout/user/user.module';

const routes: Routes = [
  {path:'users',loadChildren:()=>import('./layout/user/user.module').then(user=>user.UserModule)},
  {path:'posts',loadChildren:()=>import('./layout/post/post.module').then(post=>post.PostModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
