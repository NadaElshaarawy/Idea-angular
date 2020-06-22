import * as Store from '@app/store';
import { Idea } from '@app/models/idea';
import { Entity } from '@app/models/entity';


export interface IdeaState{
  ideas: Entity<Idea>;
  page?: number;
  loading: boolean;
  loaded: boolean;
  selectedIdea?: string
}

export interface AppState extends Store.AppState{
    ideas:IdeaState
}

export * from './idea.action';
export * from './idea.effect';
export * from './idea.reducer';
export * from './idea.selector';