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
//Create Post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.CreatePost(post);
    dispatch({ type: "Create", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Update Post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "Update", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
