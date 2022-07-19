export default (posts = [], action) => {
  switch (action.type) {
    case "Fetch_All":
      return action.payload;
    case "Create":
      return [...posts, action.payload];

    default:
      return posts;
  }
};
