import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "./components/HeroSection";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#a575d5ff",
    },
    secondary: {
      main: "#000000ff",
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
