import React, { useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Stack,
} from "@mui/material";
import memories from "./img/memories.png";
import Posts from "./components/Posts/Posts";
import Forms from "./components/Forms/Forms";
import useStyles from "./Styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const { appBar, heading, image } = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Container maxWidth="large">
        <AppBar className={appBar} position="static" color="inherit">
          <Stack display="flex" direction="row">
            <Typography className={heading} variant="h2" align="center">
              Memories
            </Typography>
            <img className={image} src={memories} alt="memories" height="60" />
          </Stack>
        </AppBar>

        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Forms />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
