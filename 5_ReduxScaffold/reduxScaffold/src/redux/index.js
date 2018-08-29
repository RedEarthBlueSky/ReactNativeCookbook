//  Redux index.js file
//  This is the Redux store

import { combineReducers, createStore, applyMiddleware } from 'redux';
import bookmarks from './modules/bookmarks/reducer';
import categories from './modules/categories/reducer';
import fetchMiddleware from './middleware/fetchMiddleware';

import { loadCategories } from './modules/categories/actions';

//  use combineReducers to merge all the reducers into a single global object
//  that will be saved in the store
const reducers = combineReducers({
  bookmarks,
  categories,
});

const store = createStore(reducers, applyMiddleware(fetchMiddleware));

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(loadCategories());

export default store;
