//  Redux - Redux Store - index.js file
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import bookmarks from './modules/bookmarks/reducer';
import categories from './modules/categories/reducer';
import fetchMiddleware from './middleware/fetchMiddleware';
import network from './modules/network/reducer';

const reducers = combineReducers({
  bookmarks,
  categories,
  network,
});

const createAppStore = applyMiddleware(fetchMiddleware)(createStore);
const store = autoRehydrate()(createAppStore)(reducers);

persistStore(store, { storage: AsyncStorage });

export default store;
