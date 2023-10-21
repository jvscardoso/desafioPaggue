import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const TabelaEventos = ({ data, onEditar, onExcluir }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Quantidade de Ingressos</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <>
                            {item.ingresso.setor.map(s => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{s.ticketDisponivel}</TableCell>
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

export default TabelaEventos;
