import React from "react";
import {
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

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const HeroSection = () => {
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
      <Box sx={{ width: 360, minHeight: 480, p: 2, boxShadow: 10 }}>
        {/* header section */}
        <Typography variant="h6" mb={2} sx={{ fontWeight: 200 }}>
          Outfit Grabber
        </Typography>

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
      </Box>
    </div>
  );
};

export default HeroSection;
