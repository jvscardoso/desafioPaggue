import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Context } from '../context/context';
import TabelaSetores from './TabelaSetores';
import TabelaLotes from './TabelaLote';

const TabelaEventos = ({data}) => {
    const { idEvento, setIdEvento } = React.useContext(Context)

    const [openSetoresModal, setOpenSetoresModal] = useState(false);
    const [openLotesModal, setOpenLotesModal] = useState(false);

    const handleVerSetoresClick = (itemId) => {
        setIdEvento(itemId);
        setOpenSetoresModal(true);
    };

    const handleVerLotesClick = (itemId) => {
        setIdEvento(itemId);
        setOpenLotesModal(true);
    };

    const handleCloseSetoresModal = () => {
        setOpenSetoresModal(false);
    };

    const handleCloseLotesModal = () => {
        setOpenLotesModal(false);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Quantidade de Ingressos</TableCell>
                        <TableCell>Setores</TableCell>
                        <TableCell>Lotes</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item) => {
                        let somaValores = 0
                        item.ingresso.setor.forEach(element => {
                            somaValores += element.ticketDisponivel
                        });
                        return <TableRow key={item.id}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{somaValores}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => handleVerSetoresClick(item.id)}>
                                    Ver Setores
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => handleVerLotesClick(item.id)}>
                                    Ver Lotes
                                </Button>
                            </TableCell>
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

            <Modal open={openSetoresModal} onClose={handleCloseSetoresModal}>
                <Box sx={{ position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Setores Cadastrados </Typography>
                        <Button variant="contained">Novo setor</Button>
                    </Box>
                    <Box>
                        <TabelaSetores data={data} idEvento={idEvento} />
                    </Box>
                </Box>
            </Modal>

            <Modal open={openLotesModal} onClose={handleCloseLotesModal}>
                <Box sx={{ position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Lotes Cadastrados </Typography>
                        <Button variant="contained">Novo Lote</Button>
                    </Box>
                    <Box>
                        <TabelaLotes data={data} idEvento={idEvento} />
                    </Box>
                </Box>
            </Modal>
        </TableContainer >
    );
};

export default TabelaEventos;
