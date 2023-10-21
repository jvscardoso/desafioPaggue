import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const ConfiguracoesConta = ({ userData, onInputChange, onSave }) => {
  return (
    <Box p={3}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo de Conta</InputLabel>
        <Select value={userData.tipoConta} onChange={(e) => onInputChange('tipoConta', e.target.value)}>
          <MenuItem value="usuario">Usuário</MenuItem>
          <MenuItem value="administrador">Administrador</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={onSave} style={{ marginTop: 20 }}>
        Salvar Configurações
      </Button>
    </Box>
  );
};

export default ConfiguracoesConta;
