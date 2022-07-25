import {
  Create,
  Delete,
  Fetch_All,
  Like,
  Update,
} from "../actions/action.types";
export default (posts = [], action) => {
  switch (action.type) {
    case Delete:
      return posts.filter((post) => post._id !== action.payload);
    case Update:
    case Like:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case Fetch_All:
      return action.payload;
    case Create:
      return [...posts, action.payload];

    default:
      return posts;
  }
};
