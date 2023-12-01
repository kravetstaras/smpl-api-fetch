export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});
