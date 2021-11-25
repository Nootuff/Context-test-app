import React, { Component } from "react"

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../styles/FormStyles.css';

class Form extends Component {
    render() {
        return (
            <main >
                <Paper className="FormPaper">
                    <Avatar className="avatar">
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Sign In
                    </Typography>
                    <Select value="english">
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                    </Select>
                    <form className="FormForm">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" autoFocus />
                        </FormControl>
                        <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
                        <Button variant="contained" type="submit" color="primary" fullWidth> Sign In</Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default Form;