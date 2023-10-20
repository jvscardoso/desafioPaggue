import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica de autenticação aqui (pode ser uma chamada à API, por exemplo)
        console.log('Usuário:', username);
        console.log('Senha:', password);
    };

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
                        <Typography sx={{fontSize:"15px"}}>Entre já sua conta e não perca nenhum evento!</Typography>
                    </Box>
                    <form style={{ height: '100%', width: '100%', maxWidth: '300px', display:"grid", placeItems: "center" }}>
                        <TextField
                            label="Nome de usuário"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <Button variant="contained" onClick={handleLogin} sx={{backgroundColor:"#5613AA", borderRadius: '10px',}}>
                            Entrar
                        </Button>
                    </form>
                </Grid>

                <Grid item xs={4} flexDirection="column" display="flex" justifyContent="center" alignItems="center" backgroundColor="#5613AA" height= '500px'>
                    <Typography pl={2} align='center' sx={{fontSize:"30px", fontWeight: "bold", color: "white"}}>Paggue Tickets</Typography>
                    <Typography pl={2} pb={2} align='center' sx={{fontSize:"10px", color: "white"}}>Clique no botão abaixo e crie já sua conta e não perca nenhum evento!</Typography>
                    <Link to = "/signUp" style={{textDecoration: 'none'}}>
                        <Button variant="contained" sx={{backgroundColor:"white", borderRadius: '10px',}}>
                            <Typography sx={{color:"#5613AA", fontWeight:"bold"}}>Criar conta</Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
