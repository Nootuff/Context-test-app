import React, { Component } from "react"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import { withStyles } from '@mui/material/InputBase';
import { ClassNames } from "@emotion/react";


class Navbar extends Component {
    render() {
        return (
            <div >
<AppBar position="static" color="primary">
    <Toolbar>
        <IconButton  color="inherit">
        <span>French flag </span> 
        </IconButton>
        <Typography className={class.title} variant="h6" color="inherit">
           App Title
        </Typography>
        <Switch />
        <div className={classes.grow} />
        <div className={classes.search} />
    </Toolbar>
</AppBar>
            </div>
        )
    }
}

export default Navbar;