import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const InformacoesPessoais = ({ userData, onInputChange, onSave }) => {
  return (
    <Box p={3}>
      <TextField
        fullWidth
        label="Nome"
        value={userData.nome}
        onChange={(e) => onInputChange('nome', e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Senha"
        value={userData.senha}
        onChange={(e) => onInputChange('senha', e.target.value)}
        margin="normal"
        type="password"
      />
      <TextField
        fullWidth
        label="Email"
        value={userData.email}
        onChange={(e) => onInputChange('email', e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Telefone"
        value={userData.telefone}
        onChange={(e) => onInputChange('telefone', e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={onSave} style={{ marginTop: 20 }}>
        Salvar Informações
      </Button>
    </Box>
  );
};

export default InformacoesPessoais;
