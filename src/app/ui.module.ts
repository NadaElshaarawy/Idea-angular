import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar'; 
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {IdeaComponent} from '@app/components/idea/idea.component';
import {IdeaEditableComponent} from '@app/components/idea-editable/idea-editable.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IdeaComponent, IdeaEditableComponent],
  imports: [
    CommonModule,
    MenubarModule,
    ProgressSpinnerModule,
    CardModule,
    ReactiveFormsModule
  ],
  exports:[
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    ProgressSpinnerModule,
    IdeaComponent,
    IdeaEditableComponent,
  
  ]
})
export class UIModule {}
