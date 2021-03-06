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
import { LanguageContext } from "../contexts/LanguageContext"
import '../styles/FormStyles.css';

const words = {
    english: {
      signIn: "Sign In",
      email: "Email Address",
      password: "Password",
      remember: "Remember Me"
    },
    french: {
      signIn: "Se Connecter",
      email: "Adresse Électronique",
      password: "Mot de Passe",
      remember: "Souviens-toi De Moi"
    },
    spanish: {
      signIn: "Registrarse",
      email: "Correo Electrónico",
      password: "Contraseña",
      remember: "Recuérdame"
    }
}

class Form extends Component {
    static contextType = LanguageContext; //Allows you to access the context in this file. 
    render() {
        const { language, changeLanguageFunc } = this.context; //Destructuring. 
        const email = words[language].email; //No idea how this works at all. 
        const { signIn, password, remember } = words[language];  //A destructured version of const email above, you could very easily have email in here too, just wanted a destructured and non-destructured version.

        return (
            <main >
                <Paper className="FormPaper">
                    <Avatar className="avatar">
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5">
                        {signIn}
                    </Typography>
                    <Select value={language} onChange={changeLanguageFunc /*The function imported from LanguageContext above, the value this is set to is used in a setstate */} >
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                    </Select>
                    <form className="FormForm">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">{password}</InputLabel>
                            <Input id="password" name="password" autoFocus />
                        </FormControl>
                        <FormControlLabel control={<Checkbox color="primary" />} 
                        label={remember} />
                        <Button variant="contained" type="submit" color="primary" fullWidth> 
                        {signIn}
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default Form;