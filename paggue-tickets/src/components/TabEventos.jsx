import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import TabelaEventos from './TabelaEventos';
import useEvent from '../hooks/useEvent';
import CadastroEventos from './CadastroEventos';

const TabEventos = () => {
  const eventos = useEvent()
  const data = eventos.eventos

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Eventos Cadastrados </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }} onClick={handleOpenModal}>Novo evento</Button>
      </Box>
      <Box>
        <TabelaEventos data={data} />
      </Box>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <CadastroEventos onCloseModal={handleCloseModal}/>
      </Modal>
    </>
  );
};

export default TabEventos;
