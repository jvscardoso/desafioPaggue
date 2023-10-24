import React from 'react'
import { Link } from "react-router-dom";
import { Box, Container, Typography } from '@mui/material'
import CaixaEvento from '../../components/CaixaEvento'
import CaixaDestaque from '../../components/CaixaDestaque'
import useEvent from '../../hooks/useEvent';

const Home = () => {
  const { eventos } = useEvent()

  return (
    <Container sx={{minWidth: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "#F5F5F5"}} >
      <Typography sx={{ fontWeight: "800", fontSize: "40px", textAlign: "left", width:"100%" }}> PRINCIPAIS EVENTOS DO MÊS </Typography>
      {/* EVENTOS*/}
      <Box sx={{ alignContent: 'center', display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", marginBottom: "50px",}}>
        {eventos.map(evento => (
          <Link to={`/evento/${evento.id}`} style={{ textDecoration: 'none' }}>
            <Box sx={{ gridColumn: "span 4", display: "flex", justifyContent: 'space-between', flexDirection: "column", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
              <CaixaEvento imageUrl={evento.imageUrl} title={evento.title} address={evento.address} date={evento.date} />
            </Box>
          </Link>
        ))}
      </Box>

      <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> DESTAQUE </Typography>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"50px", margin:"0 auto 50px auto", width:"100%"}}>
        <CaixaDestaque imageUrl={"https://i0.wp.com/setimacabine.com.br/wp-content/uploads/2017/12/8k-the-greatest-showman-hugh-jackman-movie-cast-273.jpg?fit=7680%2C4320"} title={"O Rei do Show"} address={"Todos os cinemas disponíveis"} date={"25 de Dezembro de 2023 | 18H"} />
      </Box>

      <Typography sx={{ width: "100%", fontWeight: "800", fontSize: "40px" }}> VOCÊ TAMBÉM PODE GOSTAR </Typography>
      {/* EVENTOS*/}
      <Box sx={{alignContent: 'center', display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", marginBottom: "50px" }}>
        {eventos.map(evento => (
          <Link to={`/evento/${evento.id}`} style={{ textDecoration: 'none' }}>
            <Box sx={{ gridColumn: "span 4", display: "flex", justifyContent: 'space-between', flexDirection: "column", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
              <Box>
                <CaixaEvento imageUrl={evento.imageUrl} title={evento.title} address={evento.address} date={evento.date} />
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  )
}

export default Home