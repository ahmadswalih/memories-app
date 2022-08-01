import { Grid, Grow } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Forms from "../../components/Forms/Forms";
import Posts from "../../components/Posts/Posts";
import { useTheme } from "@emotion/react";
import useStyles from "../../Styles";

const Home = () => {
  const theme = useTheme();
  const { mainContainer } = useStyles(theme);
  const [currentId, setCurrentId] = useState(null);

  return (
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
  );
};

export default Home;
