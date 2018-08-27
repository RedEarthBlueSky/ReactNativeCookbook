//  Redux index.js filter

import { combineReducers, createStore } from 'redux';
import bookmarks from './modules/bookmarks/reducer';

import {
  loadBookmarks,
  addBookmark,
  updateBookmark,
  removeBookmark,
} from './modules/bookmarks/actions';

//  use combineReducers to merge all the reducers into a single global object
//  that will be saved in the store
const reducers = combineReducers({ bookmarks, });
const store = createStore(reducers);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(loadBookmarks());

store.dispatch(addBookmark({
  id: 2,
  title: 'One more',
  url: 'http://other.com',
}));

store.dispatch(updateBookmark({
  id: 2,
  title: 'one more edited',
  url: 'http://other-edit.com',
}));

store.dispatch(removeBookmark({ id: 1 }));

unsubscribe();

export default store;
