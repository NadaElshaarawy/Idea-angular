import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UIModule } from '@app/ui.module';
import { IdeasComponent } from './ideas/ideas.component';
import { ideaReducer } from './state/idea.reducer';
import { IdeaEffects } from './state/idea.effect';
import { EditIdeaComponent } from './edit-idea/edit-idea.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { UUIDGuard } from '@app/services/uuid.guard';
import { IdeaResolver } from './idea.resolver';
import { NewIdeaComponent } from './new-idea/new-idea.component';


const routes: Routes = [
  {
    path: 'new',
    component: NewIdeaComponent,
  },
  {
    path: ':id/edit',
    component: EditIdeaComponent,
    canActivate: [UUIDGuard],
    resolve: { data: IdeaResolver}
  },
  { path: '', component: IdeasComponent },
  { path: '**', redirectTo: '' },
  
 
];


@NgModule({
  declarations: [IdeasComponent, EditIdeaComponent, NewIdeaComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('ideas',ideaReducer),
    EffectsModule.forFeature([IdeaEffects]),
    UIModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[IdeaResolver]
})
export class IdeaModule {}
