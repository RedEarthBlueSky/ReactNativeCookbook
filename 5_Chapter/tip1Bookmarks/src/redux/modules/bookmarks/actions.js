//  all actions needed in module - basically a CRUD for bookmarks
//  an action is a payload of information that sends data to the store and is the way
//  views send of request data to the global state
export const LOAD_BOOKMARKS = 'bookmarks/load';
export const ADD_BOOKMARK = 'bookmarks/add';
export const REMOVE_BOOKMARK = 'bookmarks/remove';
export const UPDATE_BOOKMARK = 'bookmarks/update';

export function loadBookmarks() {
  return {
    type: LOAD_BOOKMARKS,
    payload: [
      {
        id: 1,
        title: 'Testing 1',
        url: 'http:test.com',
        category: {
          id: 1,
          name: 'Games',
        },
      },
      //  define more bookmarks here
    ],
  }
}
//  action creator add a bookmark
export function addBookmark(bookmark) {
  return {
    type: ADD_BOOKMARK,
    payload: bookmark,
  };
}
//  action creator remove a bookmark
export function removeBookmark(bookmark) {
  return {
    type: REMOVE_BOOKMARK,
    payload: bookmark,
  };
}
//  action creator update a bookmark
export function updateBookmark(bookmark) {
  return {
    type: UPDATE_BOOKMARK,
    payload: bookmark,
  };
}
