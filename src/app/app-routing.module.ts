import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { UsersComponent } from './features/user/users/users.component';
import { IdeasComponent } from './features/idea/ideas/ideas.component';
import { EditIdeaComponent } from './features/idea/edit-idea/edit-idea.component';


const routes: Routes = [
  {path:'auth', component:AuthComponent},
  // { path: 'users',component:UsersComponent},
  // { path: 'ideas',component:IdeasComponent},
  //{ path: 'ideas/:id',component:EditIdeaComponent},
  { path: 'ideas', loadChildren: './features/idea/idea.module#IdeaModule' },
  { path: 'users', loadChildren: './features/user/user.module#UserModule' },
  //{ path: '**', redirectTo: 'ideas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
