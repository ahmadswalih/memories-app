import React, { useEffect, useState } from "react";
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
import { useTheme } from "@emotion/react";

const App = () => {
  const theme = useTheme();
  const { appBar, heading, image, mainContainer } = useStyles(theme);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
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
              className={mainContainer}
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Forms currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
