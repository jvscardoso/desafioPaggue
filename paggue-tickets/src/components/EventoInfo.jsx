import React from 'react'
import { Container, Grid, Box, Typography, Divider, Button } from "@mui/material";
import CountdownTimer from "./Countdown"

const EventoInfo = (props) => {
    return (
        <Container>
            {props.data?.map(item => (
                <Grid key={item.id} container sx={{ height: "100%", width: "100%", maxHeight: "450px", maxWidth: "650px" }}>
                    <Grid item xs={12}>
                        <Box color={"black"} padding="20px" sx={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                            <Typography variant="h6" fontWeight="900">Garanta já o seu ingresso</Typography>
                            <Box>
                                <Grid container flexDirection="row" justifyContent="space-between" >
                                    <Grid item>
                                        <Box display="flex" flexDirection="row" alignItems="center">
                                            <Typography variant="subtitle1" fontWeight="800">Data:</Typography>
                                            <Typography variant="subtitle1">{item.date}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box display="flex" flexDirection="row" alignItems="center" sx={{ justifyContent: "flex-end" }}>
                                            <Typography variant="subtitle1" fontWeight="800">Hora:</Typography>
                                            <Typography variant="subtitle1">{item.horas}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Divider orientation="horizontal" flexItem />

                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Typography variant="h5" fontWeight="800">Faltam</Typography>
                                <CountdownTimer />
                                <Typography variant="h5" fontWeight="800" paddingBottom={2}>para o evento</Typography>
                            </Box>

                            <Divider orientation="horizontal" flexItem />

                            <Box paddingTop={2}>
                                <Grid container flexDirection="row" justifyContent="space-between" >
                                    <Grid item flexDirection="column">
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="800">Localização</Typography>
                                            <Typography variant="subtitle2" color={"#5613AA"} fontWeight="600">{item.address}</Typography>
                                        </Box>
                                    </Grid>

                                    <Divider orientation="vertical" flexItem />

                                    <Grid item flexDirection="column">
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="800">A partir de:</Typography>
                                            <Typography variant="subtitle2" color={"#5613AA"} fontWeight="600">R$ {item.ingresso.setor[0].valorTicket}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>

                                <Grid sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box marginTop="10px">
                                        <Button href="#checkout" variant="contained" sx={{ backgroundColor: "#5613AA", borderRadius: '10px' }}>
                                            Comprar ingressos
                                        </Button>
                                    </Box>
                                </Grid>

                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Container>
    )
}

export default EventoInfo