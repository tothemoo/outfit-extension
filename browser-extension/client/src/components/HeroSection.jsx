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
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";

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
        <AppBar position="sticky" elevation={1}>
          <Toolbar variant="dense">
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Outfit Grabber
            </Typography>

            {/* pushes anything after this to the right */}
            <Box sx={{ flexGrow: 1 }} />

            <Button variant="outlined" color="white" size="small">
              <Typography sx={{ fontSize: "small" }}>Refresh</Typography>{" "}
              <RefreshIcon sx={{ fontSize: "medium" }} />
            </Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 2 }}>
          <Stack spacing={2}>
            {/* link grabber */}
            <Box display="flex" alignItems="center" gap={1}>
              <TextField
                id="outlined-basic"
                label="Paste your link here"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                sx={{ color: "white" }}
              >
                Add
              </Button>
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
