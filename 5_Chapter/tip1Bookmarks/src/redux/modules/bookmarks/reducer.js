//  reducer holds code to define how data will be stored in the global state

import {
  LOAD_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  UPDATE_BOOKMARK,
} from './actions';

//  define the initial state
const initialState = {
  bookmarks: [],
};

//  reducer function accepts current state and dispatched action
export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKMARKS:
      return {
        ...state,
        bookmarks: [...action.payload]
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case UPDATE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.map(bookmark => {
          if (bookmark.id === action.payload.id) {
            return {
              ...action.payload,
            };
          }
          return bookmark;
        }),
      };
    default:
      return state;
  }
}
