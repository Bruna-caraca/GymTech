import React, { useState } from "react";
import { 
    Button, 
    FormControl, 
    FormLabel, 
    TextField,
    Link,
    Box,
    InputAdornment, 
  } from "@mui/material";
import './style.css'
import { useSelector } from "react-redux";
// import axios from "axios";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import logo from '../../logo.png'
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

export default function Login() {
    const acesso = useSelector(state => state.data)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
        if (email.length === 0) {
            setOpen(true)
            return (
                <Snackbar 
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                autoHideDuration={6000}
                open={open}
                >
                    <Alert variant="filled" severity="error">E-mail em branco!</Alert>
                </Snackbar>
            )
        }
    }

    return (
        <Box className="container">
      <header className="header">
        <img src={logo} alt="GymTech" className="logo"/>
        <p>Faça login e comece a usar</p>
      </header>

      <FormControl action="">
        <Box className="input-container">
          <FormLabel className="label-form" htmlFor="email">E-mail</FormLabel>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="false"
            type="text" 
            name="email" 
            id="email" 
            placeholder="johndoe@example.com"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <EmailOutlinedIcon className="icon"/>
                </InputAdornment>
              )
            }}
            />
        </Box>
        <Box className="input-container">
          <FormLabel className="label-form" htmlFor="password">Senha</FormLabel>
          <TextField
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete="false"
            type="password" 
            name="password" 
            id="password" 
            placeholder="**********" 
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <LockOutlinedIcon className="icon"/>
                </InputAdornment>
              )
            }}
            />
        </Box>

        <Button 
          variant="contained" 
          className="button" 
          onClick={handleSubmit}
        >
          Entrar
        </Button>
        <Box className="footer">
          <p>Não possui conta? <Link href="#">Crie uma agora</Link> </p>
        </Box>
      </FormControl>
    </Box>
    )
}