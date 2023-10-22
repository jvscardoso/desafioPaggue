import React, { useState } from 'react';
import { Box,Typography, Button, Modal } from '@mui/material';
import { useParams } from "react-router-dom";
import useEvent from '../hooks/useEvent';
import TabelaCupom from './TabelaCupom';
import FormCupom from './FormCupom';

const TabCupons = () => {
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
        <Typography sx={{ fontWeight: "800", fontSize: "40px"}}> Cupons Cadastrados </Typography>
        <Button variant="contained" onClick={handleOpenModal}>Cadastrar</Button>
      </Box>
      <Box>
        <TabelaCupom data={data} />
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
          <FormCupom />
        </Box>
      </Modal>
      
    </Box>
  );
};

export default TabCupons;
