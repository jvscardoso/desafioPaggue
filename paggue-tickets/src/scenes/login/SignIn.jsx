import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const {signIn} = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        await signIn (email, password)
    }

    return (
        <Box sx={{
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            width: '1000px',
            maxWidth: '100%',
            minHeight: '480px'
        }}>
            <Grid container alignItems="center" height="100%">
                <Grid item xs={8} direction="column" display="flex" justifyContent="center" alignItems="center" backgroundColor="white">
                    <Box color={"#5613AA"}>
                        <Typography variant='h2' fontWeight={"bold"}>Login</Typography>
                        <Typography sx={{ fontSize: "15px" }}>Entre já sua conta e não perca nenhum evento!</Typography>
                    </Box>
                    <form style={{ height: '100%', width: '100%', maxWidth: '300px', display: "grid", placeItems: "center" }}>
                        <TextField
                            label="Nome de usuário"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button variant="contained" onClick={()=>handleLogin()} sx={{borderRadius: "10px", backgroundColor:"#5613AA", fontWeight:"bold", '&:hover': {backgroundColor: "#9d63e6"}}}>
                            Entrar
                        </Button>
                    </form>
                </Grid>

                <Grid item xs={4} flexDirection="column" display="flex" justifyContent="center" alignItems="center" backgroundColor="#5613AA" height='500px'>
                    <Typography pl={2} align='center' sx={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>Paggue Tickets</Typography>
                    <Typography pl={2} pb={2} align='center' sx={{ fontSize: "10px", color: "white" }}>Clique no botão abaixo e crie já sua conta e não perca nenhum evento!</Typography>
                    <Link to="/signUp" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ backgroundColor: "white", borderRadius: '10px', '&:hover': {backgroundColor: "#9d63e6"}}}>
                            <Typography sx={{ color: "#5613AA", fontWeight: "bold" }}>Criar conta</Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
