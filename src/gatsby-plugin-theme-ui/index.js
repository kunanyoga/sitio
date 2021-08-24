import { darken } from "@theme-ui/color";

/** @type {import('theme-ui').Theme} */
const theme = {
  colors: {
    text: "#fff",
    background: "#324f3d",
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
    },
  },
  buttons: {
    primary: {
      borderRadius: 10,
      cursor: "pointer",
      ":hover": {
        bg: darken("primary", 0.1),
      },
    },
  },
};

export default theme;
