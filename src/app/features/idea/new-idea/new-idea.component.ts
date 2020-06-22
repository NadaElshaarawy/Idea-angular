import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/features/user/state';
import { IdeaDTO } from '@app/models/idea';
import { CreateIdea } from '../state';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.scss']
})
export class NewIdeaComponent {

  constructor(private store:Store<AppState>) { }

  submit(e: IdeaDTO){
    return this.store.dispatch(new CreateIdea(e));
  }

}
