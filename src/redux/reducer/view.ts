import { SHOW_LIST, SHOW_GRID } from '../actions/view';

export default function viewReducer(state = 'list', action: { type: string }) {
  switch (action.type) {
    case SHOW_LIST:
      return 'list';
    case SHOW_GRID:
      return 'grid';
    default:
      return state;
  }
}
