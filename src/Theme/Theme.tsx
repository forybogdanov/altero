import { createTheme } from "@mui/material/styles";
export const primary = "#d6161d";
export const secondary = "#595552";
export const success = "#258009";
export const info = "#b6b83b";
export const greyDark = "#272D3A";
export const grey = "#757C8D";
export const greyLight = "#BABDC3";
export const greyLighter = "#E1E0DF";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0, // after value is phone
            sm: 600, // after value is tablet
            md: 1280, // after value is low resolution laptop
            lg: 1400, // after value is high resolution laptop
            xl: 1920,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                // Heading 2
                h1: {
                    fontStyle: "normal",
                    fontSize: "32px",
                    lineHeight: "37px",
                },
                // Paragraph Bold
                h2: {
                    fontStyle: "normal",
                    fontSize: "18px",
                    lineHeight: "21px",
                },
                // Paragraph Default Regular
                h3: {
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                },
                // Paragraph Default Medium
                h4: {
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "19px",
                },
                // Paragraph Default Bold
                h5: {
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "19px",
                },
                // Paragraph Small Regular
                h6: {
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "17px",
                },
                // Subtitle Bold
                subtitle1: {
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "22px",
                    lineHeight: "26px",
                },
                // Subtitle Regular
                subtitle2: {
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "22px",
                    lineHeight: "26px",
                },
                // Paragraph Big Regular
                body1: {
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "23px",
                },
                // Paragraph Big Bold
                body2: {
                    fontStyle: "normal",
                    fontSize: "20px",
                    lineHeight: "23px",
                },
                // Heading 1
                caption: {
                    fontStyle: "normal",
                    fontSize: "40px",
                    lineHeight: "50px",
                },
            },
        },
    },
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        success: {
            main: success,
        },
        info: {
            main: info,
        },
    },
});
