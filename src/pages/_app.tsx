import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../theme";
import { AppProps } from "next/app";
import { useEffect } from "react";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = React.useState(lightTheme);

  const [selectedTheme, setSelectedTheme] = React.useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const theme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(theme);
  };
  useEffect(() => {
    setActiveTheme(selectedTheme === "light" ? lightTheme : darkTheme);
  }, [selectedTheme]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <Component {...pageProps} toggleTheme={toggleTheme} selectedTheme={selectedTheme} />
      </ThemeProvider>
    </>
  );
}
