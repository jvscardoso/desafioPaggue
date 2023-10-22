import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const TabelaSetores = ({ data, onEditar, onExcluir }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome do setor</TableCell>
                        <TableCell>Quantidade de ingressos cadastrados</TableCell>
                        <TableCell>Quantidade de ingressos disponíveis</TableCell>
                        <TableCell>Disponibilidade</TableCell>
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

export default TabelaSetores;
