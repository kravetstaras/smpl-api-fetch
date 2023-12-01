import { SET_SEARCH_TERM } from '../actions/search';

const searchReducer = (
  state = '',
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
