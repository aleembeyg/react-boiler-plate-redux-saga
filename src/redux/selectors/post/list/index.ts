export const selectPosts = (state: any) =>
  state.posts.posts?.sort((a: any,b: any) => b.id - a.id);
export const selectPostsError = (state: any) => state.posts.error;
export const selectActionStatus = (state: any) => state.posts.requestStatus;
