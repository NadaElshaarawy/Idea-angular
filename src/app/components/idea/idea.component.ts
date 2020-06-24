import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Idea } from '@app/models/idea';
import { Store } from '@ngrx/store';
import { AppState } from '@app/features/user/state';
import { DeleteIdea } from '@app/features/idea/state';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent {
  constructor(private store: Store<AppState>){}
  @Input()
  idea: Idea;
  
  @Input()
  displayOptions: boolean = false;

  @Output()
  delete: EventEmitter<string> = new EventEmitter();
  @Output()
  onLike: EventEmitter<void> = new EventEmitter();
  @Output()
  onDislike: EventEmitter<void> = new EventEmitter();

  votes: number = 0;

  onDelete() {
    this.delete.emit(this.idea.id);
  }

  
}