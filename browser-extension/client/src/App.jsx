import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "./components/HeroSection";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000ff",
    },
    secondary: {
      main: "#ffffffff",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
    </ThemeProvider>
  );
}

export default App;
