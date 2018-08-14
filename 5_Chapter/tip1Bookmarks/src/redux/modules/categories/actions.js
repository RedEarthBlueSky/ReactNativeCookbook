//  contain all the actions needed in the module
//  an action is a payload of information that sends
//  data to the store and is the way views send of request
//  data to the global state
export const LOAD_CATAGORIES = './categ/LOAD_CATAGORIES';
export const LOAD_CATAGORIES_SUCCESS = './categ/LOAD_CATAGORIES_SUCCESS';
export const LOAD_CATAGORIES_FAIL = './categ/LOAD_CATAGORIES_FAIL';

export function loadCategories() {
  return {
    types: [
      LOAD_CATAGORIES,
      LOAD_CATAGORIES_FAIL,
      LOAD_CATAGORIES_SUCCESS,
    ],
    promise: {
      url: 'https://my-bookmarks-api.herokuapp.com/api/categories',
      method: 'GET',
    }
  };
}
