export const LOAD_CATAGORIES = 'categ/LOAD_CATAGORIES';
export const LOAD_CATAGORIES_SUCCESS = 'categ/LOAD_CATAGORIES_S';
export const LOAD_CATAGORIES_FAIL = 'categ/LOAD_CATAGORIES_F';

const URL = 'https://my-bookmarks-api.herokuapp.com/api/categories';

export functon loadCategories() {
  return {
    types: [ LOAD_CATAGORIES, LOAD_CATAGORIES_SUCCESS, LOAD_CATAGORIES_FAIL, ],
    promise: {
      url:  URL,
      method: 'GET',
    },
  };
}
