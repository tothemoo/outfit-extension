import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Stack,
  Button,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Typography,

} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";



//components
import LinkSection from "./LinkSection";
import CreateForm from "./CreateForm";
import HistorySection from "./HistorySection";
import CardSection from "./CardSection";


const HeroSection = () => {


  //states
  const [activeState, setActiveState] = useState(null)





  return (
    <div className="section-1">
      <Box sx={{ width: 360, minHeight: 480, boxShadow: 10 }}>
        {/* header section */}
        <AppBar position="sticky" elevation={1}>
          <Toolbar variant="dense">

            <img src="/assets/logo2.png" width="40px" alt="logo" />

            <Box sx={{ flexGrow: 1 }} />

            <Box display="flex" gap={1}>

              <Button variant="outlined" color="white" size="small">
                <Typography sx={{ fontSize: "small" }}>Refresh</Typography>{" "}
                <RefreshIcon sx={{ fontSize: "medium" }} />
              </Button>

            </Box>

          </Toolbar>
        </AppBar>

        <Box sx={{ p: 2 }}>
          <AppBar position="static" elevation={2} sx={{
            borderRadius: "50px",
            height: "40px",
            justifyContent: "center",

          }}>
            <Toolbar sx={{
              minHeight: "40px !important",
              padding: "0 !important",
              display: "flex",
              width: "100%",
            }}
            >
              <Button
                sx={{
                  flex: 1, borderRight: "1px solid rgba(255,255,255,0.3)",
                  transition: "background-color 0.25s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.5)",
                  },
                }}
                onClick={() => setActiveState("create")}
              >

                <Typography color="white" sx={{ fontSize: "12px" }}>Create</Typography>
              </Button>

              <Button
                sx={{
                  flex: 1,
                  borderRight: "1px solid rgba(255,255,255,0.3)",
                  transition: "background-color 0.25s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.5)",
                  },
                }}
                onClick={() => setActiveState("link")}
              >
                <Typography color="white" sx={{ fontSize: "12px" }}>Link</Typography>
              </Button>

              <Button sx={{
                flex: 1, transition: "background-color 0.25s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.5)",
                },
              }}
                onClick={() => setActiveState("history")}
              >
                <Typography color="white" sx={{ fontSize: "12px" }}>History</Typography>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        {/* conditionals */}

        {/* Create */}
        {activeState == "create" && (
          <CreateForm />
        )}


        {/* Link paster  */}

        {activeState == "link" && (
          <LinkSection />
        )}

        {/* History */}
        {activeState == "history" && (
          <HistorySection />
        )}


        {/* beautify */}
        {!activeState && <CardSection />}


      </Box>
    </div>
  );
};

export default HeroSection;
