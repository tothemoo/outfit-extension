import React, { useEffect, useState, useRef } from "react";
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


const LinkSection = () => {

    //state
    const containerRef = useRef(null)


    //gsap
    useEffect(() => {
        if (!containerRef.current) return;


        gsap.to(containerRef.current, {
            duration: 0.5,
            ease: "power1.out",
            y: 10
        });
    }, [])


    return (
        <Stack ref={containerRef}>
            <Box display="flex" alignItems="center" gap={1} sx={{ p: 2 }}>
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


        </Stack>





    )
}

export default LinkSection