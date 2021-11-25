import React, { Component } from "react"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import '../styles/NavbarStyles.css';


class Navbar extends Component {
    render() {
        return (
            <div >
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton color="inherit" >
                            <span>France </span>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            App Title
                        </Typography>
                        <Switch />
                        <Paper className="container" >
                            <InputBase
                                className="search"
                                placeholder=" Search"
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon className="searchIcon" />
                            </IconButton>
                        </Paper>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;