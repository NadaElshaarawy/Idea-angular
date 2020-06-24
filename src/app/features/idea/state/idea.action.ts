import { Action } from '@ngrx/store';
import { Idea, IdeaDTO } from '@app/models/idea';
import { Comment, CommentDTO } from '@app/models/comment';
export enum IdeaActions {
  LOAD_IDEAS = '[Idea] Load ideas',
  LOAD_IDEAS_SUCCESS = '[Idea] Load ideas success',

  LOAD_IDEA = '[Idea] Load idea',
  LOAD_IDEA_SUCCESS = '[Idea] Load idea success',

  CREATE_IDEA = '[Idea] Create idea',
  CREATE_IDEA_SUCCESS = '[Idea] Create idea success',

  UPDATE_IDEA = '[Idea] Update idea',
  UPDATE_IDEA_SUCCESS = '[Idea] Update idea success',

  DELETE_IDEA = '[Idea] Delete idea',
  DELETE_IDEA_SUCCESS = '[Idea] Delete idea success',

  LIKE_IDEA = '[Idea] LIKE idea',
  DISLIKE_IDEA = '[Idea] DISLIKE idea',

  COMMENT_IDEA = '[Idea] comment idea',
  COMMENT_IDEA_SUCCESS = '[Idea] comment idea'
}

export class LoadIdeas implements Action {
  readonly type = IdeaActions.LOAD_IDEAS;
}

export class LoadIdeasSuccess implements Action {
  readonly type = IdeaActions.LOAD_IDEAS_SUCCESS;
  constructor(public payload: Idea[]) {}
}

export class LoadIdea implements Action {
  readonly type = IdeaActions.LOAD_IDEA;
  constructor(public payload: string) {}
}

export class LoadIdeaSuccess implements Action {
  readonly type = IdeaActions.LOAD_IDEA_SUCCESS;
  constructor(public payload?: Idea) {}
}

export class CreateIdea implements Action {
  readonly type = IdeaActions.CREATE_IDEA;
  constructor(public payload: IdeaDTO) {}
}

export class CreateIdeaSuccess implements Action {
  readonly type = IdeaActions.CREATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class UpdateIdea implements Action {
  readonly type = IdeaActions.UPDATE_IDEA;
  constructor(public payload: Partial<IdeaDTO>) {}
}

export class UpdateIdeaSuccess implements Action {
  readonly type = IdeaActions.UPDATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class DeleteIdea implements Action {
  readonly type = IdeaActions.DELETE_IDEA;
  constructor(public payload: string) {}
}

export class DeleteIdeaSuccess implements Action {
  readonly type = IdeaActions.DELETE_IDEA_SUCCESS;
  constructor(public payload: string) {}
}

export class LikeIdea implements Action {
  readonly type = IdeaActions.LIKE_IDEA;
  constructor(public payload: string) {}
}

export class DislikeIdea implements Action {
  readonly type = IdeaActions.DISLIKE_IDEA;
  constructor(public payload: string) {}
}

export class CommentIdea implements Action {
  readonly type = IdeaActions.COMMENT_IDEA;
  constructor( public id:string,public payload: CommentDTO) {}
}
export class CommentIdeaSuccess implements Action {
  readonly type = IdeaActions.COMMENT_IDEA_SUCCESS;
  constructor(public payload: CommentDTO) {}
}
export type IdeaAction =
  | LoadIdeas
  | LoadIdeasSuccess
  | LoadIdea
  | LoadIdeaSuccess
  | CreateIdea
  | CreateIdeaSuccess
  | UpdateIdea
  | UpdateIdeaSuccess
  | DeleteIdea
  | DeleteIdeaSuccess
  | LikeIdea
  | DislikeIdea
  |CommentIdea
  |CommentIdeaSuccess;