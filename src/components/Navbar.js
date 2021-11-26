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
import { ThemeContext } from "../contexts/ThemeContext"; //Imports the ThemeContext const from ThemeContext.


class Navbar extends Component {
    static contextType = ThemeContext; //This gives you access to everything in ThemeContext.
    render() {
        const { isDarkMode, toggleThemeFunc } = this.context; //Destructured const, contains the value of isDarkMode & toggleThemeFunc.

        //console.log(this.context);//The context object is accessed this way.

        return (
            <div>
                <AppBar position="static" color={ isDarkMode ? "primary" : "default" /*Ternary operator, looks at the value of isDarkMode in the ThemeContext file*/ }>
                    <Toolbar>
                        <IconButton color="inherit" >
                            <span>France </span>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            App Title
                        </Typography>
                        <Switch color="secondary" onChange={ toggleThemeFunc /*Uses the function defined in ThemeContext*/} />
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