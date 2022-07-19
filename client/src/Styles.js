import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    margin: "30px 0",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    flexDirection: "row",
  },
  image: {
    marginLeft: "15px",
    height: 60,
  },
}));
