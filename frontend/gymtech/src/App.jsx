import React from "react";
import { 
  Button, 
  FormControl, 
  FormLabel, 
  TextField,
  Link,
  Box,
  InputAdornment
} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import logo from './logo.png'
import './global.css'

export default function App() {
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

        <Button variant="contained" className="button">Entrar</Button>
        <Box className="footer">
          <p>Não possui conta? <Link href="#">Crie uma agora</Link> </p>
        </Box>
      </FormControl>
    </Box>
  );
}
