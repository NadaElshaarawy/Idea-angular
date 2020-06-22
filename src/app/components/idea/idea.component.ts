import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Idea } from '@app/models/idea';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent {
  @Input()
  idea: Idea;
  
  @Input()
  displayOptions: boolean = false;

  @Output()
  onDelete: EventEmitter<void> = new EventEmitter();
  @Output()
  onLike: EventEmitter<void> = new EventEmitter();
  @Output()
  onDislike: EventEmitter<void> = new EventEmitter();

  votes: number = 0;
}