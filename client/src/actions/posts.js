import * as api from "../api/index";

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "Fetch_All", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
