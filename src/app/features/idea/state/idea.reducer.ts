import { IdeaState } from '.';
import { IdeaAction, IdeaActions } from './idea.action';

const initialState: IdeaState = {
  ideas: {},
  loading: false,
  loaded: false,
  selectedIdea: null
};

export const ideaReducer:(state:IdeaState, action:IdeaAction) => IdeaState = (state = initialState, action) =>{
  switch (action.type) {
    case IdeaActions.LOAD_IDEAS:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.LOAD_IDEA:
        const selectedIdea = action.payload;
      return {
        ...state,
        selectedIdea,
        loading: true,
        loaded: false
      };
    case IdeaActions.CREATE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.UPDATE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.DELETE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.LIKE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.DISLIKE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.LOAD_IDEAS_SUCCESS:
      return {
        ...state,
        ideas: action.payload.reduce(
          (acc, idea) => ({ ...acc, [idea.id]: idea }),
          state.ideas
        ),
        loading: false,
        loaded: true
      };
    case IdeaActions.LOAD_IDEA_SUCCESS:
      return {
        ...state,
        ideas: action.payload
          ? { ...state.ideas, [action.payload.id]: action.payload }
          : state.ideas,
        loading: false,
        loaded: true
      };
    case IdeaActions.CREATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: { ...state.ideas, [action.payload.id]: action.payload },
        selectedIdea: action.payload.id,
        loading: false,
        loaded: true
      };
    case IdeaActions.UPDATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: { ...state.ideas, [action.payload.id]: action.payload },
        selectedIdea: action.payload.id,
        loading: false,
        loaded: true
      };
    case IdeaActions.DELETE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: Object.keys(state.ideas)
          .filter(key => key !== action.payload)
          .reduce((acc, key) => ({ ...acc, key: state[key] }), {}),
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};