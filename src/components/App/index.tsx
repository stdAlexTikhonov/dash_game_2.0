import { Routes } from "../../routes";
import Box from "@material-ui/core/Box";
import AppBar from "../AppBar";
import DevTools from "mobx-react-devtools";
import { observer } from "mobx-react";
import React from "react";

@observer
class App extends React.Component {
  render() {
    return (
      <Box height="100vh" width="100%" display="flex" bgcolor="black">
        <DevTools />
        <AppBar />
        <Routes />
      </Box>
    );
  }
}

export default App;
