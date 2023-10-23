import React, { useContext, useEffect, useState } from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Box,Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

const IngressoSelector = ({ data }) => {
  const [quantidades, setQuantidades] = useState({});

  const calcularValorTotal = (quantidade, valorTicket) => {
    return quantidade * valorTicket;
  };

  const getTotalCompra = () => {
    let total = 0;
    for (const itemId in quantidades) {
      const item = data[0]?.ingresso?.setor?.find(item => item.nome=itemId)
      if (item) {
        total += calcularValorTotal(quantidades[itemId], item.valorTicket);
      }
    }
    return total;
  };

  useEffect(() => {}, [quantidades])

  const aumentarQuantidade = (nome) => {
    const novaQuantidade = quantidades[nome] ? quantidades[nome] + 1 : 1;
    setQuantidades(anterior => ({ ...anterior, [nome]: novaQuantidade }));
  };

  const diminuirQuantidade = (nome) => {
    const novaQuantidade = quantidades[nome] ? quantidades[nome] - 1 : 0;
    if (novaQuantidade >= 0) {
      setQuantidades({ ...quantidades, [nome]: novaQuantidade });
    }
  };

  const {setValorTotalState } = useContext(Context)

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) =>
              item.ingresso.setor.map((s) => (
                <TableRow key={item.nome}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{s.nome}</TableCell>
                  <TableCell>R$ {s.valorTicket}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "20px",
                        width: "140px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button onClick={() => diminuirQuantidade(s.nome)}>-</Button>
                      {quantidades[s.nome] || 0}
                      <Button onClick={() => aumentarQuantidade(s.nome)}>+</Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: "20px", borderRadius: "5px", backgroundColor: "white", padding: "20px", display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
        <Box>
          <Typography variant="h4" color="black" gutterBottom fontWeight="900">Total: R${getTotalCompra()}</Typography>
        </Box>
        <Box>
          <Link onClick={() => {
            setValorTotalState(getTotalCompra())
          }} to="/checkout">
            <Button variant="contained" color="primary" sx={{backgroundColor:"#5613AA", fontWeight:"bold", '&:hover': {backgroundColor: "#9d63e6"}}}>
              Adicionar ao carrinho
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default IngressoSelector;
