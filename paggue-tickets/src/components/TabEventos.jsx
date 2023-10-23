import React, { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import FormEventos from './FormEventos'
import TabelaEventos from './TabelaEventos';
import useEvent from '../hooks/useEvent';

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
        <Button variant="contained" onClick={handleOpenModal}>Cadastrar</Button>
      </Box>
      <Box>
        <TabelaEventos data={data} />
      </Box>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={{
          position: 'absolute',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <FormEventos />
        </Box>
      </Modal>
    </>
  );
};

export default TabEventos;
