import { createTheme } from "@mui/material/styles";
import colors from "styles/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary[500],
    },
    secondary: {
      main: colors.neutral[500],
    },
    success: {
      main: colors.success[500],
    },
    warning: {
      main: colors.warning[500],
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
