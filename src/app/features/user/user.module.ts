import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/user.reducer';
import { UserEffects } from './state/user.effects';
import { UsersComponent } from './users/users.component';
import { UIModule } from '@app/ui.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('users',userReducer),
    EffectsModule.forFeature([UserEffects]),
    UIModule
  ]
})
export class UserModule { }
