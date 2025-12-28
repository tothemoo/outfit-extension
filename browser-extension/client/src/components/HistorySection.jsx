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

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';


//db
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";

const HistorySection = () => {

    //db
    const onSubmit = async (data) => {
        try {
            await db.outfits.add({
                itemName: data.itemName,
                quantity: data.quantity,
                cost: data.cost,
                link: data.link || "",
                image: imageFile,
                createdAt: new Date(),
            })

            console.log("Data Saved:", data)
            reset()
            setImageFile(null)
            setImage(null)
            setActiveState("table");
        }
        catch {

        }
    }

    const outfits = useLiveQuery(() => db.outfits.orderBy("createdAt").reverse().toArray(), [])

    //state
    const containerRef = useRef(null)

    const handleDelete = async (id) => {
        try {
            await db.outfits.delete(id);
        }
        catch (err) {
            console.error("Cannot be deleted:", err)
        }
    }

    const totalAmount = outfits?.reduce(
        (sum, item) => sum + item.cost * item.quantity,
        0
    );

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
                                <TableCell>Sl </TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Item</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Link</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {outfits?.map((item, index) => (
                                <TableRow key={item.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell> {item.image instanceof Blob && (
                                        <img
                                            src={URL.createObjectURL(item.image)}
                                            alt="outfit"
                                            width="40"
                                            style={{ borderRadius: 4 }}
                                        />
                                    )}
                                    </TableCell>
                                    <TableCell>{item.itemName}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>{item.cost * item.quantity}</TableCell>
                                    <TableCell>{item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                color: "#1976d2",
                                                fontWeight: 600,
                                                textDecoration: "none"

                                            }} ><OpenInNewIcon fontSize="small" /></a>
                                    )}</TableCell>
                                    <TableCell>
                                        <Box display="flex">
                                            <IconButton variant="outlined" size="small">  <EditIcon fontSize="small" sx={{ color: "grey" }} /></IconButton>
                                            <IconButton variant="outlined" size="small" onClick={() => handleDelete(item.id)}>  <DeleteIcon fontSize="small" sx={{ color: "red" }} /></IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>

                            ))}
                            <TableRow>
                                <TableCell colSpan={4} sx={{ fontWeight: 600, textAlign: "right" }}>
                                    Total
                                </TableCell>

                                <TableCell sx={{ fontWeight: 700 }}>
                                    {totalAmount}
                                </TableCell>

                                <TableCell colSpan={2} />
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>


            </Stack>
        </Box>
    )
}

export default HistorySection