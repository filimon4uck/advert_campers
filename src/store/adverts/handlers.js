export const handleFulfilledFetchAdverts = (state, { payload }) => {
  state.adverts = payload;
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
