import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import EventoInfo from "../../components/EventoInfo";
import IngressoSelector from "../../components/IngressoSelector";
import { Link } from "react-router-dom";


const Show1 = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Grid container spacing={3}>
        {/* Primeiro Setor */}
        <Grid item xs={12}>
          <Box width="95vw" padding={2} color={"white"} sx={{ backgroundColor: "#5613AA", display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" gutterBottom>Informações do Show</Typography>
            <Box sx={{ justifyContent: "flex-end" }}>
              <EventoInfo />
            </Box>
          </Box>
        </Grid>

        {/* Segundo Setor */}
        <Grid item xs={12}>
          <Box width="97vw" color={"white"} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", borderRadius: "10px" }}>
            <Box sx={{ backgroundColor: "#5613AA", justifyContent: "center" }}>
              <Typography variant="h4" gutterBottom>Descrição do Show</Typography>
            </Box>
            <Box sx={{ backgroundColor: "white", padding: "20px" }}>
              <Typography variant="body1" color="black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </Typography>
            </Box>
          </Box>
        </Grid>


        {/* Terceiro Setor */}
        <Grid item xs={12}>
          <Box width="95vw" padding={2} color={"white"} sx={{ backgroundColor: "#5613AA", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <Typography variant="h4" gutterBottom>Ingressos</Typography>
            <Box sx={{ justifyContent: "flex-start" }}>
              <IngressoSelector data={"23 de Outubro de 2023"} descricao={"Meia entrada"} preco={"R$100"} />
            </Box>
            <Box paddingTop={2} sx={{ justifyContent: "flex-start" }}>
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

export default Show1;
