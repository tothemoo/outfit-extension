import React, { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap"

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
    MenuItem,

} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSchema from "../validation-schema/FormSchema";


//db
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";

const CreateForm = () => {

    const { register, handleSubmit, formState: { errors }, reset, } = useForm({ resolver: yupResolver(FormSchema) })



    const amount = [
        {
            value: '1',
            label: "1"
        },
        {
            value: '2',
            label: "2"
        },
        {
            value: '3',
            label: "3"
        },
        {
            value: '4',
            label: "4"
        }

    ]

    //state
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null)
    const containerRef = useRef(null)

    const [activeState, setActiveState] = useState(null)

    //gsap animation
    useEffect(() => {
        if (!containerRef.current) return;


        gsap.to(containerRef.current, {
            duration: 0.5,
            ease: "power1.out",
            y: 10
        });
    }, []);

    const handleReset = () => {
        reset()
    }

    const handleDelete = async (id) => {
        try {
            await db.outfits.delete(id);
        }
        catch (err) {
            console.error("Cannot be deleted:", err)
        }
    }

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


    return (
        <Box component="form" ref={containerRef} onSubmit={handleSubmit(onSubmit)}>
            {!activeState && (
                <Stack spacing={1} sx={{ p: 2 }}>

                    <Box display="flex" gap={1}>
                        <TextField
                            label="Item name"
                            placeholder="Enter the item"
                            fullWidth
                            size="small"
                            {...register("itemName")}
                            error={!!errors.itemName}
                            helperText={errors.itemName?.message}
                        />

                        <TextField
                            label="Quantity"
                            select
                            fullWidth
                            size="small"
                            {...register("quantity")}
                            error={!!errors.quantity}
                            helperText={errors.itemName?.message}
                        >
                            {amount.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    <Box display="flex" gap={1}>
                        <TextField
                            label="Cost"
                            placeholder="Enter the price"
                            fullWidth
                            size="small"
                            {...register("cost")}
                            error={!!errors.quantity}
                            helperText={errors.cost?.message}
                        />
                    </Box>
                    <Box display="flex" gap={1}>
                        <TextField
                            label="Link"
                            {...register("link")}
                            error={!!errors.quantity}
                            helperText={errors.link?.message}
                            placeholder="Enter the URL"
                            fullWidth
                            size="small"
                        />
                    </Box>

                    {/* image upload */}
                    <Box display="flex" gap={1}>
                        <Card
                            sx={{
                                width: 360,
                                height: 100,
                                border: "2px dashed #ccc",
                                cursor: "pointer",
                            }}
                        >
                            <CardContent
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                }}
                            >
                                <label
                                    htmlFor="image-upload"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (!file) return;

                                            setImageFile(file);
                                            setImage(URL.createObjectURL(file));
                                        }

                                        }
                                    />

                                    {image ? (
                                        <img
                                            src={image}
                                            alt="preview"
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "100%",
                                                objectFit: "contain",
                                            }}
                                        />
                                    ) : (
                                        <Box textAlign="center">
                                            <AddPhotoAlternateIcon color="action" />
                                            <Typography variant="body2" color="text.secondary">
                                                Upload image
                                            </Typography>
                                        </Box>
                                    )}
                                </label>
                            </CardContent>
                        </Card>
                    </Box>


                    {/* buttons */}
                    <Stack spacing={2} alignItems="center">
                        <Box display="flex" gap={1}>
                            <Button type="submit" variant="contained">Submit</Button>
                            <Button variant="outlined" onClick={handleReset}>Cancel</Button>
                        </Box>
                    </Stack>
                </Stack >
            )}

            {activeState == "table" && (
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
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <IconButton onClick={() => setActiveState(null)}><AddBoxIcon fontSize="large" sx={{ color: "black" }} /></IconButton>
                        </Box>
                    </Stack>
                </Box>
            )
            }

        </Box >
    )
}

export default CreateForm;