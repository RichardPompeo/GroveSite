import Routes from "./Routes";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#b32a12",
      },
      secondary: {
        main: "#c35c29",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
