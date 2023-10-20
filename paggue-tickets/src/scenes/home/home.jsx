import React from 'react'
import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material'
import CaixaEvento from '../../components/CaixaEvento'
import CaixaDestaque from '../../components/CaixaDestaque'
import show1 from '../../img/show1.jpg'
import show2 from '../../img/show2.jpg'
import show3 from '../../img/show3.jpg'
import show4 from '../../img/show4.jpg'

const Home = () => {
  return (
    <Box margin = "10px">
      <Typography sx={{fontWeight: "bold", fontSize: "40px"}}> PRINCIPAIS EVENTOS DO MÊS</Typography>

      {/* EVENTOS*/}
      <Box sx={{alignContent:'center', display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:"20px", marginTop:"20px", marginBottom:"20px"}}>

      {/* EVENTO 1*/}
        <Link to = "/show1" style={{textDecoration: 'none'}}>
          <Box sx={{marginLeft: "30px",gridColumn:"span 4",  display:"flex", justifyContent: 'space-between', flexDirection:"column", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>        
              <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <CaixaEvento imageUrl={show1} title={"Tome Forró"} address={"Clube São Cristóvão"} date={"Qui, 25 de Setembro de 2023 | 18H"} />
              </Box>
            </Box>
          </Link>

        {/* EVENTO 2*/}
        <Link to = "/show2" style={{textDecoration: 'none'}}>
          <Box sx={{gridColumn:"span 4",  display:"flex", justifyContent: 'space-between', flexDirection:"column", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>        
              <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <CaixaEvento imageUrl={show2} title={"Online Music Show"} address={"Nova Yorque - EUA"} date={"Qui, 25 de Setembro de 2023 | 18H"} />
              </Box>
            </Box>
          </Link>

        {/* EVENTO 3*/}
        <Link to = "/show3" style={{textDecoration: 'none'}}>
          <Box sx={{gridColumn:"span 4",  display:"flex", justifyContent: 'space-between', flexDirection:"column", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>        
              <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <CaixaEvento imageUrl={show3} title={"Online Music Show"} address={"Nova Yorque - EUA"} date={"Qui, 25 de Setembro de 2023 | 18H"} />
              </Box>
            </Box>
          </Link>

        {/* EVENTO 4*/}
        <Link to = "/show4" style={{textDecoration: 'none'}}>
          <Box sx={{gridColumn:"span 4",  display:"flex", justifyContent: 'space-between', flexDirection:"column", borderRadius: "10px", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>        
              <Box sx={{display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <CaixaEvento imageUrl={show4} title={"O rei do show"} address={"Todos os cinemas disponíveis"} date={"25 de Dezembro de 2023 | 18H"} />
              </Box>
            </Box>
          </Link>

        </Box>

        <Box display = "grid" gridTemplateColumns="auto">
          <Typography sx={{fontWeight: "bold", fontSize: "40px"}}> DESTAQUE </Typography>
          <CaixaDestaque imageUrl={show4} title={"O rei do show"} address={"Todos os cinemas disponíveis"} date={"25 de Dezembro de 2023 | 18H"}/>
        </Box>

    </Box>

  )
}

export default Home