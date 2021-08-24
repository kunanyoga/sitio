import { darken } from "@theme-ui/color";
import hoja from "../images/hoja.jpg";

/** @type {import('theme-ui').Theme} */
const theme = {
  colors: {
    text: "#000",
    background: "#e6fdec",
    primary: "#509261",
    white: "#fff",
  },
  fontWeights: {
    heading: "normal",
  },
  fonts: {
    body: '"Raleway", sans-serif',
    heading: "inherit",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      backgroundImage: `url(${hoja})`,
      backgroundSize: "cover",
    },
  },
  buttons: {
    primary: {
      ":hover": {
        bg: darken("primary", 0.1),
      },
    },
  },
};

export default theme;
