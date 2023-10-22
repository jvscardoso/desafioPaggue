import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const IngressoSelector = ({ data }) => {
  const [quantidades, setQuantidades] = useState({});

  const calcularValorTotal = (quantidade, valorTicket) => {
    return quantidade * valorTicket;
  };

  const getTotalCompra = () => {
    let total = 0;
    for (const itemId in quantidades) {
      const item = data.find((item) => item.id === itemId);
      if (item) {
        total += calcularValorTotal(quantidades[itemId], item.ingresso.setor[0].valorTicket);
      }
    }
    return total;
  };

  const aumentarQuantidade = (id, valueMax) => {
    const novaQuantidade = quantidades[id] ? quantidades[id] + 1 : 1;
    if (novaQuantidade <= valueMax) {
      setQuantidades({ ...quantidades, [id]: novaQuantidade });
    }
  };

  const diminuirQuantidade = (id) => {
    const novaQuantidade = quantidades[id] ? quantidades[id] - 1 : 0;
    if (novaQuantidade >= 0) {
      setQuantidades({ ...quantidades, [id]: novaQuantidade });
    }
  };

  return (
    <Box>
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
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{s.nome}</TableCell>
                  <TableCell>{s.valorTicket}</TableCell>
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
                      <Button onClick={() => diminuirQuantidade(item.id)}>-</Button>
                      {quantidades[item.id] || 0}
                      <Button onClick={() => aumentarQuantidade(item.id, s.ticketDisponivel)}>+</Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: "20px", borderRadius:"5px", backgroundColor: "white", padding: "20px", display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
        <Box>
          <Typography variant="h4" color="black" gutterBottom fontWeight="900">Total: R${getTotalCompra()}</Typography>
        </Box>
        <Box>
        <Link to="/checkout">
          <Button variant="contained" color="primary" sx={{ backgroundColor: "#5613AA", borderRadius: '10px'}}>
            Adicionar ao carrinho
          </Button>
        </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default IngressoSelector;
