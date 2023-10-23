import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const TabelaCupom = ({ data }) => {
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
                    {data?.map((item, index) => (
                        item.ingresso.cupom.map((cupom, cupomIndex) => (
                            <TableRow key={`${index}-${cupomIndex}`}>
                                <TableCell>{cupom.nome}</TableCell>
                                <TableCell>{cupom.valor}</TableCell>
                                <TableCell>{cupom.expirationDate}</TableCell>
                                <TableCell>{cupom.qtd}</TableCell>
                                <TableCell>
                                    <IconButton color="primary">
                                        <EditOutlinedIcon />
                                    </IconButton>
                                    <IconButton color="secondary">
                                        <DeleteOutlineOutlinedIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TabelaCupom;
