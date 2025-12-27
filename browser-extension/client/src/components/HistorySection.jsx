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
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const HistorySection = () => {

    //state
    const containerRef = useRef(null)


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

    //gsap animation
    useEffect(() => {
        if (!containerRef.current) return;


        gsap.to(containerRef.current, {
            duration: 0.5,
            ease: "power1.out",
            y: 10
        });
    }, [])



    return (
        <Box sx={{ p: 2 }} ref={containerRef}>
            <Stack spacing={2}>

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
    )
}

export default HistorySection