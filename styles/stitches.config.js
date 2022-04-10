import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      black: "rgba(19, 19, 21, 1)",
      white: "rgba(255, 255, 255, 1)",
      gray: "rgba(243, 243, 243, 0.6)",
      red: "rgba(208, 3, 3, 0.85)",
      green: "rgba(71, 115, 0, 0.95)",
      purple: "#7000FF",
      yellow: "rgba(255, 215, 0, 0.95)",
      gold: "rgba(232, 186, 0, 1)",
      blackAlpha: "rgba(19, 19, 21, 0.98)",
    },
    media: {
      bp1: "(min-width: 575px)",
      bp2: "(min-width: 750px)",
    },
  },
});
