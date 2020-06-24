import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { NewIdeaComponent } from './features/idea/new-idea/new-idea.component';



const routes: Routes = [
  {path:'auth', component:AuthComponent},
  { path: 'ideas/new',component:NewIdeaComponent},
  { path: 'ideas', loadChildren: './features/idea/idea.module#IdeaModule' },
  { path: 'users', loadChildren: './features/user/user.module#UserModule' },
  { path: '**', redirectTo: 'ideas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
