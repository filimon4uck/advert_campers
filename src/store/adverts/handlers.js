export const handleFulfilledFetchAdverts = (state, { payload }) => {
  state.adverts.push(...payload);
  state.prevPage = state.page;
  state.isLoadMore = state.page < Math.ceil(13 / 4);
  state.isLoading = false;
};
export const handleRejectedFetchAdverts = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
export const handlePendingFetchAdverts = (state, _) => {
  state.isLoading = true;
  state.error = null;
};
