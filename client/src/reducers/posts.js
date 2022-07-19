export default (posts = [], action) => {
  switch (action.type) {
    case "Fetch_All":
      return action.payload;
    case "Create":
      return posts;

    default:
      return posts;
  }
};
