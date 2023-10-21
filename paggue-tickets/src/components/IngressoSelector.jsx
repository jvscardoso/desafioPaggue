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
} from "@mui/material";

const IngressoSelector = ({ data }) => {
  const [quantidade, setQuantidade] = useState(0);

  const aumentarQuantidade = (valueMax) => {
    if (quantidade === valueMax) {
      setQuantidade(valueMax)
    }  
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead >
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <>
              {item.ingresso.setor.map(s => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{s.nome}</TableCell>
                  <TableCell>{s.valorTicket}</TableCell>
                  <TableCell>
                    <Box sx={{ backgroundColor: "#D9D9D9", borderRadius: "20px", width: "140px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Button onClick={diminuirQuantidade}>-</Button>
                      {quantidade}
                      <Button onClick={() => aumentarQuantidade(s.ticketDisponivel)}>+</Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
              }
            </>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngressoSelector;
