import React, { useState } from 'react';
import { Box,Typography, Button, Modal } from '@mui/material';
import useEvent from '../hooks/useEvent';
import TabelaCupom from './TabelaCupom';
import FormCupom from './FormCupom';

const TabCupons = () => {
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
        <Typography sx={{ fontWeight: "800", fontSize: "40px"}}> Cupons Cadastrados </Typography>
        <Button variant="contained" sx={{backgroundColor:"#5613AA", fontWeight:"bold", '&:hover': {backgroundColor: "#9d63e6"}}} onClick={handleOpenModal}>Novo cupom</Button>
      </Box>
      <Box>
        <TabelaCupom data={data} />
      </Box>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={{
            position: 'absolute',
            width: "500px",
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
    </>
  );
};

export default TabCupons;
