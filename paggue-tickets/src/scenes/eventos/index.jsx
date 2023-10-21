import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import EventoInfo from "../../components/EventoInfo";
import IngressoSelector from "../../components/IngressoSelector";
import { Link, useParams } from "react-router-dom";
import useEvent from "../../hooks/useEvent";

const PageEvento = () => {
  const {id} = useParams()
  const { eventos } = useEvent()
  const data = eventos.filter(item => item.id == id)

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={3}>
        {/*INFORMAÇÕES*/}
        <Grid item>
          <Box width="95vw" padding={2} color={"white"} sx={{ backgroundColor: "#5613AA", display: "flex", justifyContent: "space-between", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <Typography variant="h4" gutterBottom fontWeight="900">Informações do Show</Typography>
            <Box sx={{justifyContent: "flex-end"}}>
              <EventoInfo data={data}/>
            </Box>
          </Box>
        </Grid>

        {/*DESCRIÇÃO*/}
        <Grid item>
          <Box width="95vw" padding={2} color={"white"} sx={{backgroundColor: "#5613AA", display: "flex", justifyContent: "center", flexDirection: "column", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
              <Typography variant="h4" gutterBottom fontWeight="900">Descrição do Show</Typography>
            <Box padding={2} sx={{ backgroundColor: "white"}}>
              <Typography variant="body1" color="black"> A A A A A </Typography>
            </Box>
          </Box>
        </Grid>


        {/*COMPRA DE INGRESSOS*/}
        <Grid item id="checkout" >
          <Box width="95vw" padding={2} color={"white"} sx={{ backgroundColor: "#5613AA", display: "flex", justifyContent: "space-between", flexDirection: "column", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <Typography variant="h4" gutterBottom fontWeight="900">Ingressos</Typography>
            <Box sx={{ justifyContent: "flex-start" }}>
              <IngressoSelector data={"23 de Outubro de 2023"} descricao={"Meia entrada"} preco={"R$100"} />
            </Box>

            <Box paddingTop={2} sx={{ justifyContent: "flex-start", borderRadius:"10px"}}>
              <Box sx={{ backgroundColor: "white", padding: "20px", display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                <Box>
                  <Typography variant="h4" color="black">Total: R$500,00</Typography>
                </Box>
                <Box justifyItems="center">
                  <Link to="/checkout">
                    <Button variant="contained" sx={{ backgroundColor: "#5613AA", borderRadius: '10px', }}>
                      Adicionar ao carrinho
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageEvento;
