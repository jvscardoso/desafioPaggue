import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Message = ({ onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Obrigado pela compra!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Agradecemos por sua compra. Esperamos que você aproveite seu produto.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Message;
