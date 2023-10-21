import React from 'react'
import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material'
import CaixaEvento from '../../components/CaixaEvento'
import CaixaDestaque from '../../components/CaixaDestaque'
import useEvent from '../../hooks/useEvent';

const Home = () => {
  const { eventos } = useEvent()
  
  return (
    <Box margin="10px">
      <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}> PRINCIPAIS EVENTOS DO MÊS </Typography>

      {/* EVENTOS*/}
      <Box sx={{ alignContent: 'center', display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px", marginBottom: "20px" }}>
        {eventos.map(evento => (
          <Link to="/evento" style={{ textDecoration: 'none' }}>
            <Box sx={{ marginLeft: "30px", gridColumn: "span 4", display: "flex", justifyContent: 'space-between', flexDirection: "column", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
              <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                <CaixaEvento imageUrl={evento.imageUrl} title={evento.title} address={evento.address} date={evento.date} />
              </Box>
            </Box>
          </Link>
        ))}

      </Box>
          {/* 
      <Box display="grid" gridTemplateColumns="auto">
        <Typography sx={{ fontWeight: "bold", fontSize: "40px" }}> DESTAQUE </Typography>
        <CaixaDestaque imageUrl={show4} title={"O rei do show"} address={"Todos os cinemas disponíveis"} date={"25 de Dezembro de 2023 | 18H"} />
      </Box>
      */} 

    </Box>

  )
}

export default Home