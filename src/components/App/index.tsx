import { Routes } from "../../routes";
import Box from "@material-ui/core/Box";
import AppBar from "../AppBar";
import DevTools from "mobx-react-devtools";

const App = () => (
  <Box height="100vh" width="100%" display="flex" bgcolor="black">
    <DevTools />
    <AppBar />
    <Routes />
  </Box>
);

export default App;
