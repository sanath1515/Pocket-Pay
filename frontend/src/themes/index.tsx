import * as React from "react";

import { createTheme } from "@mui/material";
import "../index.css";

declare module "@mui/material/styles" {
  interface PaletteColor {
    100: string;
    300: string;
    500: string;
    main: string;
  }
  interface TypographyVariants {
    b1: any;
    b2: any;
    b3: any;
    c1: any;
    linkText: any;
  }
  interface TypographyVariantsOptions {
    b1: any;
    b2: any;
    b3: any;
    c1: any;
    linkText: any;
  }

  interface TypeText {
    high?: string;
    medium?: string;
    low?: string;
    lowemphasis?: string;
  }

  interface CustomPalette {
    otherColors: {
      stroke2: string;
      icon1: string;
      icon2: string;
    };
    structuralColors: {
      blue: string;
      white: string;
      cardHover: string;
      buttonHover: string;
    };
    borderColors: {
      prime: string;
    };
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption: true;
    title: true;
  }
}

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1081,
      lg: 1441,
      xl: 1920,
    },
  },
  spacing: 4,
  palette: {
    action: {
      disabledBackground: "#6C5DD3",
      disabled: "#E8E8E9",
      disabledOpacity: 0.56,
    },
    mode: "light",
    primary: {
      main: "#7633FF",
      "100": "#E4D6FF",
      "300": "#9764FF",
      "500": "#7633FF",
    },
    text: {
      low: "#E8E7F0",
      lowemphasis: "#9F9DA3",
      medium: "#77767A",
      high: "#141414",
    },
    otherColors: {
      stroke2: "#E5E4E5",
      icon1: "#141414",
      icon2: "#A5A8AC",
    },
    structuralColors: {
      blue: "#F8F9FA",
      white: "#FFFFFF",
      cardHover: "#F3F2F5",
      buttonHover: "#F4EFFF",
    },
    grey: {
      "100": "#E4E4E5",
      "200": "#D7D7D7",
    },
    borderColors: {
      prime: "1px solid #E4E4E5",
    },
  },
  typography: {
    fontFamily: "Gerbera",
    h1: {
      "@media (max-width:1920px)": {
        fontSize: "1.5rem",
        fontWeight: "150",
        lineHeight: "2.5rem",
      },
    },
    b1: {
      "@media (max-width:1920px)": {
        fontSize: "1.25rem",
        fontWeight: "Regular",
        lineHeight: "2rem",
      },
    },
    b2: {
      "@media (max-width:1920px)": {
        fontSize: "1.063rem",
        fontWeight: "Regular",
        lineHeight: "1.5",
      },
    },
    b3: {
      "@media (max-width:1920px)": {
        fontSize: "1rem",
        fontWeight: "Regular",
        lineHeight: "1.5rem",
      },
    },
    c1: {
      "@media (max-width:1920px)": {
        fontSize: "0.875rem",
        fontWeight: "Regular",
        lineHeight: "1.313rem",
      },
    },
    linkText: {
      "@media (max-width:1920px)": {
        fontSize: "0.875rem",
        fontWeight: "Regular",
        lineHeight: "0.831rem",
      },
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#9F9DA3",
        },
      },
    },
  },
});
export default Theme;
