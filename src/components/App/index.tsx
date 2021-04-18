import { Routes } from "../../routes";
import Box from "@material-ui/core/Box";
import AppBar from "../AppBar";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <Box height="100vh" width="100%" display="flex" bgcolor="black">
        <AppBar />
        <Routes />
      </Box>
    );
  }
}

export default App;
