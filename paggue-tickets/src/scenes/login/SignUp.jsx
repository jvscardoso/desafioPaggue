import { Box, Grid, TextField, Button, Typography, Select, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const SignUp = () => {
    const {signUp} = useAuth()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setisAdmin] = useState();

    const handleLogin = () => {
        signUp (username, email, password, isAdmin)
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
                        <Typography variant='h2' fontWeight={"bold"}>Crie sua conta</Typography>
                        <Typography sx={{ fontSize: "15px" }}>Crie já sua conta e não perca nenhum evento!</Typography>
                    </Box>
                    <form style={{ height: '100%', width: '100%', maxWidth: '300px', display: "grid", placeItems: "center" }}>
                        <TextField
                            label="Nome de usuário"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Email"
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
                        <Select
                            onChange={e => setisAdmin(e.target.value)}
                        >
                            <MenuItem value={false}>Usuário</MenuItem>
                            <MenuItem value={true}>Administrador</MenuItem>
                        </Select>

                        <Button variant="contained" color="primary" onClick={handleLogin} sx={{ backgroundColor: "#5613AA", borderRadius: '10px', }}>
                            Entrar
                        </Button>
                    </form>
                </Grid>

                <Grid item xs={4} flexDirection="column" display="flex" justifyContent="center" alignItems="center" backgroundColor="#5613AA" height='500px'>
                    <Typography pl={2} align='center' sx={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>Bem vindo a Paggue Tickets</Typography>
                    <Typography pl={2} pb={2} align='center' sx={{ fontSize: "10px", color: "white" }}>Entre já sua conta e não perca nenhum evento!</Typography>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ backgroundColor: "white", borderRadius: '10px', }}>
                            <Typography sx={{ color: "#5613AA", fontWeight: "bold" }}>Fazer login</Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignUp;
