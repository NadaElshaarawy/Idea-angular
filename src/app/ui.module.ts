import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:[
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule
  ]
})
export class UIModule { }
