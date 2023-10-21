import React, { useState } from 'react';
import { Box,Typography, Button, Modal } from '@mui/material';
import FormEventos from './FormEventos'
import TabelaEventos from './TabelaEventos';
import { useParams } from "react-router-dom";
import useEvent from '../hooks/useEvent';

const TabEventos = () => {
  const {id} = useParams()
  const { eventos } = useEvent()
  const data = eventos.filter(item => item.id == id)

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: "800", fontSize: "40px"}}> Eventos Cadastrados </Typography>
        <Button variant="contained" onClick={handleOpenModal}>Cadastrar</Button>
      </Box>
      <Box>
        <TabelaEventos data={data} />
      </Box>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box>
          <FormEventos />
        </Box>
      </Modal>
      
    </Box>
  );
};

export default TabEventos;
