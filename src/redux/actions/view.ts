export const SHOW_LIST = 'SHOW_LIST';
export const SHOW_GRID = 'SHOW_GRID';

export const startLoading = () => ({
  type: SHOW_LIST,
});

export const endLoading = () => ({
  type: SHOW_GRID,
});
