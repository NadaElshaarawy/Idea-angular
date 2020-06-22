import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/user.reducer';
import { UserEffects } from './state/user.effects';
import { UsersComponent } from './users/users.component';
import { UIModule } from '@app/ui.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [ 
    CommonModule,
    StoreModule.forFeature('users',userReducer),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild(routes), 
    UIModule
  ],
})
export class UserModule {}
