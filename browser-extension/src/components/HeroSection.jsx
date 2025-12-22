import React, { useEffect, useState } from "react";
import {
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

import AddIcon from '@mui/icons-material/Add';
import AddLinkIcon from '@mui/icons-material/AddLink';
import FiberNewIcon from '@mui/icons-material/FiberNew';

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const HeroSection = () => {




  //table style
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));



  return (
    <div className="section-1">
      <Box sx={{ width: 360, minHeight: 480, boxShadow: 10 }}>



        {/* header section */}
        <AppBar position="sticky" elevation={1} >
          <Toolbar variant="dense">

            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500 }}
            >
              Outfit Grabber
            </Typography>

            {/* pushes anything after this to the right */}
            <Box sx={{ flexGrow: 1 }} />

            <Button variant="outlined" color="white" size="small">
              <Typography sx={{ fontSize: "small" }}>New</Typography> <AddIcon sx={{ fontSize: "medium" }} />
            </Button>
          </Toolbar>
        </AppBar>


        <Box sx={{ p: 2 }}>

          <Stack spacing={2}>

            {/* link grabber */}
            <Box sx={{
              width: "100%",
              minHeight: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Paper elevation={3} sx={{
                width: "100%",
                height: "100%",
                minHeight: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: 2,
              }} >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography sx={{ color: "grey" }}>Drop your Link</Typography>
                  <AddLinkIcon sx={{ color: "grey" }} />
                </Stack>
              </Paper>

            </Box>

            {/* add Button */}
            <Box display="flex" >
              <Button variant="contained" endIcon={<AddIcon />} sx={{ color: "white" }}>Add</Button>
            </Box>


            {/* table section */}
            <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Sl no.</StyledTableCell>
                    <StyledTableCell>Item</StyledTableCell>
                    <StyledTableCell>Qty</StyledTableCell>
                    <StyledTableCell>Price</StyledTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell>1</StyledTableCell>
                    <StyledTableCell>Zipper Jacket</StyledTableCell>
                    <StyledTableCell>2</StyledTableCell>
                    <StyledTableCell>200</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Box>



      </Box>

    </div>
  );
};

export default HeroSection;
