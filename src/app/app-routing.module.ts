import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';



const routes: Routes = [
  {path:'auth', component:AuthComponent},
  // { path: 'users',component:UsersComponent},
  // { path: 'ideas',component:IdeasComponent},
  //{ path: 'ideas/:id',component:SelectedIdeaComponent},
  { path: 'ideas', loadChildren: './features/idea/idea.module#IdeaModule' },
  { path: 'users', loadChildren: './features/user/user.module#UserModule' },
  { path: '**', redirectTo: 'ideas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
