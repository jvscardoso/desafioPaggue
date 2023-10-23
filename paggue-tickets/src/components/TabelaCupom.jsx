import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
                    {data?.map((item) => {
                        return <TableRow key={item.id}>
                            <TableCell>{item.ingresso.cupom.nome}</TableCell>
                            <TableCell>{item.ingresso.cupom.valor}</TableCell>
                            <TableCell>{item.ingresso.cupom.expirationDate}</TableCell>
                            <TableCell>{item.ingresso.cupom.qtd}</TableCell>
                            <TableCell>
                                <IconButton color="primary">
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton color="secondary">
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TabelaCupom;
