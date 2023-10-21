import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const TabelaCupom = ({ data, onEditar, onExcluir }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome do cupom</TableCell>
                        <TableCell>Porcentagem de Desconto</TableCell>
                        <TableCell>Validade</TableCell>
                        <TableCell>Quantidade</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <>
                            {item.ingresso.cupom.map(s => (
                                <TableRow key={item.id}>
                                    <TableCell>{s.nome}</TableCell>
                                    <TableCell>{s.valor}</TableCell>
                                    <TableCell>{s.qtd}</TableCell>
                                    <TableCell>{s.expirationDate}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary">
                                            Editar
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Excluir
                                        </Button>
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

export default TabelaCupom;
