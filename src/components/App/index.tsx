import { Routes } from "../../routes";
import Box from "@material-ui/core/Box";
import AppBar from "../AppBar";

const App = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      bgcolor="black"
      tabIndex={0}
      // onKeyDown={handleKeyDown}
      // onKeyUp={handleKeyUp}
    >
      <AppBar />
      <Routes />
    </Box>
  );
};

export default App;
