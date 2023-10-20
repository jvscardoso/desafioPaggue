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
} from "@mui/material";

const IngressoSelector = ({ data, descricao, preco}) => {
  const [quantidade, setQuantidade] = useState(0);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
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
          <TableRow>
            <TableCell>{data}</TableCell>
            <TableCell>{descricao}</TableCell>
            <TableCell>{preco}</TableCell>
            <TableCell>
              <Button onClick={diminuirQuantidade}>-</Button>
              {quantidade}
              <Button onClick={aumentarQuantidade}>+</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngressoSelector;
