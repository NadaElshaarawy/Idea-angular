import { User } from '@app/models/user';
import { Comment } from '@app/models/comment';

export interface Idea {
  id: string;
  created: Date;
  updated: Date;
  idea: string;
  description: string;
  author: User;
  likes?: number;
  dislikes?: number;
  comments?:Comment[]
}
 
export interface IdeaDTO {
  id?: string;
  idea: string;
  description: string;
}