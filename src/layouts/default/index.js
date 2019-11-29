import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

import Header from "components/header";

export default function index(props) {
  //  DEFAULT LAYOUT

  const { children } = props;

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          {children}
        </Typography>
      </Container>
    </>
  );
}
