import React, { useState } from "react";
import { Button, Box, Popover, Typography } from "@mui/material";
import '@fontsource/andika'

export default function ImageButton({ imageSource }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Box>
            <Button aria-describedby={id}  onClick={handleClick}>
                    <img src={imageSource} style={{ width: '30px', height: '30px', marginRight: '5px', cursor: 'pointer' }} />
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ fontFamily: "andika, sans-serif", p: 1 }}>coming soon!</Typography>
                </Popover>
            </Box>

        </>
    )
}