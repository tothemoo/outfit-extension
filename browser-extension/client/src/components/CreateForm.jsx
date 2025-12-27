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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";


const CreateForm = () => {

    const amount = [
        {
            value: 'One',
            label: "1"
        },
        {
            value: 'Two',
            label: "2"
        },
        {
            value: 'Three',
            label: "3"
        },
        {
            value: 'Four',
            label: "4"
        }

    ]

    //state
    const [image, setImage] = useState(null);
    const containerRef = useRef(null)

    //gsap animation
    useEffect(() => {
        if (!containerRef.current) return;


        gsap.to(containerRef.current, {
            duration: 0.5,
            ease: "power1.out",
            y: 10
        });
    }, []);



    return (
        <Box ref={containerRef}>
            <Stack spacing={1} sx={{ p: 2 }}>

                <Box display="flex" gap={1}>
                    <TextField
                        label="Item name"
                        placeholder="Enter the item"
                        fullWidth
                        size="small"
                    />

                    <TextField
                        label="Quantity"
                        select

                        fullWidth
                        size="small"

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
                    />
                </Box>
                <Box display="flex" gap={1}>
                    <TextField
                        label="Link"
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
                                    onChange={(e) =>
                                        setImage(URL.createObjectURL(e.target.files[0]))
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

            </Stack >

            {/* buttons */}
            <Stack spacing={2} alignItems="center">
                <Box display="flex" gap={1}>
                    <Button variant="contained">Submit</Button>
                    <Button variant="outlined">Cancel</Button>
                </Box>
            </Stack>
        </Box>




    )
}

export default CreateForm