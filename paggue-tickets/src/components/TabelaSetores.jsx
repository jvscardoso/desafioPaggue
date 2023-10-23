import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const TabelaSetores = ({ data, idEvento }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome do setor</TableCell>
                        <TableCell>Capacidade do setor</TableCell>
                        <TableCell>Quantidade de ingressos</TableCell>
                        <TableCell>Disponibilidade</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item) => {
                        if (item.id !== idEvento) {
                            return null
                        }
                        return item.ingresso.setor.map(setor => {
                            return <TableRow key={Math.random().toString()}>
                                <TableCell>{setor.nome}</TableCell>
                                <TableCell>{setor.capacidade}</TableCell>
                                <TableCell>{setor.ticketDisponivel}</TableCell>
                                <TableCell>{setor.valorTicket}</TableCell>
                                <TableCell>
                                    <IconButton color="primary">
                                        <EditOutlinedIcon />
                                    </IconButton>
                                    <IconButton color="secondary">
                                        <DeleteOutlineOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        })
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TabelaSetores;
