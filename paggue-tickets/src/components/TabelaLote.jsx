import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const TabelaLotes = ({ data, idEvento }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Lote</TableCell>
                        <TableCell>Quantidade</TableCell>
                        <TableCell>Validade</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item) => {
                        if (item.id !== idEvento) {
                            return null
                        }
                        return item.ingresso.lote.map(lote => {
                            return <TableRow key={Math.random().toString()}>
                                <TableCell>{lote.id}</TableCell>
                                <TableCell>{lote.quantidade}</TableCell>
                                <TableCell>{lote.expirationDate}</TableCell>
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

export default TabelaLotes;
