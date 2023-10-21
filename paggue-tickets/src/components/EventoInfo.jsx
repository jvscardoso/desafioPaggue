import React from 'react'
import { Container, Grid, Box, Typography, Divider, Button } from "@mui/material";

const EventoInfo = ({date, hora, address, valorTicket}) => {
    return (
        <Container>
            <Grid container sx={{height:"100%", width:"100%", maxHeight:"450px", maxWidth:"650px"}}>
                <Grid item xs={12}>
                    <Box color={"black"} padding="20px" sx={{ backgroundColor: "white" }}>
                        <Typography variant="h5">Garanta já o seu ingresso</Typography>
                        <Box>
                            <Grid container flexDirection="row" justifyContent="space-between" >
                                <Grid item>
                                    <Box>
                                        <Typography variant="subtitle1">Data: {date}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ justifyContent: "flex-end" }}>
                                        <Typography variant="subtitle1">{hora}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Divider orientation="horizontal" flexItem />

                        <Box paddingTop={25}>
                            <Grid container flexDirection="row" justifyContent="space-between" >
                                <Grid item flexDirection="column">
                                    <Box>
                                        <Typography variant="subtitle1">Localização</Typography>
                                        <Typography variant="subtitle1">{address}</Typography>
                                    </Box>
                                </Grid>

                                <Divider orientation="vertical" flexItem />

                                <Grid item flexDirection="column">
                                    <Box>
                                        <Typography variant="subtitle1">A partir de:</Typography>
                                        <Typography variant="subtitle1">{valorTicket}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid sx={{display: "flex", justifyContent:"center"}}>
                                <Box marginTop="10px">
                                    <Button variant="contained" sx={{ backgroundColor: "#5613AA", borderRadius: '10px', }}>
                                        Comprar ingressos
                                    </Button>
                                </Box>
                            </Grid>

                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EventoInfo