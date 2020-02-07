import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  // #1
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000"
    }
  }
});
