import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Forms from "./components/Forms/Forms";
import useStyles from "./Styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { useTheme } from "@emotion/react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";

const App = () => {
  const theme = useTheme();
  const { mainContainer } = useStyles(theme);
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Container maxWidth="large">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
