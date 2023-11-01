import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Context } from '../context/context';
import TabelaSetores from './TabelaSetores';
import TabelaLotes from './TabelaLote';
import FormLote from './FormLote';
import FormSetores from './FormSetores';

const TabelaEventos = ({ data }) => {
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

    const [openNovoLote, setOpenNovoLote] = useState(false);
    const handleOpenNovoLote = () => {
        setOpenNovoLote(true);
    };

    const [openNovoSetor, setOpenNovoSetor] = useState(false);   
    const handleOpenNovoSetor = () => {
        setOpenNovoSetor(true)
    }


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
                                <Button variant="contained" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }} onClick={() => handleVerSetoresClick(item.id)}>
                                    Ver Setores
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }} onClick={() => handleVerLotesClick(item.id)}>
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

            {/* MODAL DE ABERTURA DE SETORES */}
            <Modal open={openSetoresModal} onClose={handleCloseSetoresModal}>
                <Box sx={{ position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth:"800px" }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Setores Cadastrados </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" }}} onClick={handleOpenNovoSetor}>Novo setor</Button>
                    </Box>
                    <Box>
                        <TabelaSetores data={data} idEvento={idEvento} />
                    </Box>
                </Box>
            </Modal>

            {/* MODAL DE ABERTURA DE LOTES */}
            <Modal open={openLotesModal} onClose={handleCloseLotesModal}>
                <Box sx={{ position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth:"800px"}}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Lotes Cadastrados </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }} onClick={handleOpenNovoLote}>Novo Lote</Button>
                    </Box>
                    <Box>
                        <TabelaLotes data={data} idEvento={idEvento} />
                    </Box>
                </Box>
            </Modal>

            {/* MODAL DE ABERTURA DE NOVOS SETORES */}
            <Modal open={openNovoSetor} onClose={() => setOpenNovoSetor(false)}>
                <Box sx={{ position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth:"500px"}}>
                    <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Cadastrar novo setor </Typography>
                    <FormSetores />
                </Box>
            </Modal>

            {/* MODAL DE ABERTURA DE NOVOS LOTES */}
            <Modal open={openNovoLote} onClose={() => setOpenNovoLote(false)}>
                <Box sx={{ position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, p: 4, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth:"500px"}}>
                    <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Cadastrar novo lote </Typography>
                    <FormLote />
                </Box>
            </Modal>
        </TableContainer >
    );
};

export default TabelaEventos;
