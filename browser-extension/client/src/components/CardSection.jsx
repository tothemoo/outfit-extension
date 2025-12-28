import React from 'react'
import { useRef, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import {
    Box,
    Typography,

} from "@mui/material";
import gsap from "gsap";

const CardSection = () => {

    const svgRef = useRef(null)
    const cardRef = useRef(null)

    //gsap animation

    useEffect(() => {

        if (!svgRef.current) return;
        const timer = setTimeout(() => {
            gsap.from(svgRef.current, {
                opacity: 0, y: 100, duration: 2,

            })

            gsap.to(svgRef.current, {
                rotation: 180, x: -100, duration: 2
            })
        }, 100);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        gsap.to(svgRef.current, {
            duration: 10,
            repeat: -1,
            rotation: 360,
        })
    })

    useEffect(() => {
        if (!cardRef.current) return;

        const timer = setTimeout(() => {
            gsap.to(cardRef.current, {
                duration: 0.5,
                ease: "power1.out",
                y: 5
            });
        }, 50);

    }, []);


    return (
        <Box sx={{ p: 2, position: "relative" }}>
            <Box sx={{
                position: "absolute",
                top: -20,
                left: "30%",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
            }} ref={svgRef}>
                <img src="/assets/17.png" width="80px" />

            </Box>
            <Box ref={cardRef}>
                <Card sx={{
                    maxWidth: 360, background:
                        "linear-gradient(140deg, #F4F4ED, #DBE9EE)",
                }}>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image="/assets/image-card.jpg" />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">Preface</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Create your outfit and never lose track of where you last saw it. Outfit Grabber is your one stop solution to keep the latest trends, and your wardrobe in check.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
    )
}

export default CardSection