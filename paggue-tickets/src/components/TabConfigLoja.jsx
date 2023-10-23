import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Box, Typography } from '@mui/material';
import { HexColorPicker } from "react-colorful";

const TabConfigLoja = () => {
  const [formData, setFormData] = useState({
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    email: '',
    senha: '',
    quantidadeMinimaDesconto: '',
    tipoDesconto: '',
    coresRGB: ''
  });

  const [color, setColor] = useState("#aabbcc");

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    console.log('Dados salvos:', formData);
    setEditMode(false);
  };

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'10px' }}>
        <Typography sx={{ fontWeight: '800', fontSize: '40px' }}> Dados da empresa </Typography>
        {!editMode && <Button variant="contained" sx={{backgroundColor:"#5613AA", fontWeight:"bold", '&:hover': {backgroundColor: "#9d63e6"}}} onClick={() => setEditMode(true)}>Editar Dados</Button>}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' }}>
        <Box p={3} backgroundColor="#F2F2F2" sx={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TextField
            fullWidth
            variant='standard'
            label="CNPJ"
            value={formData.cnpj}
            onChange={(e) => handleInputChange('cnpj', e.target.value)}
            margin="normal"
            disabled={!editMode}
          />
          <TextField
            fullWidth
            variant='standard'
            label="Razão Social"
            value={formData.razaoSocial}
            onChange={(e) => handleInputChange('razaoSocial', e.target.value)}
            margin="normal"
            disabled={!editMode}
          />
          <TextField
            fullWidth
            variant='standard'
            label="Nome Fantasia"
            value={formData.nomeFantasia}
            onChange={(e) => handleInputChange('nomeFantasia', e.target.value)}
            margin="normal"
            disabled={!editMode}
          />
          <TextField
            fullWidth
            variant='standard'
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            margin="normal"
            disabled={!editMode}
          />
          <TextField
            fullWidth
            variant='standard'
            label="Senha"
            type='password'
            value={formData.senha}
            onChange={(e) => handleInputChange('senha', e.target.value)}
            margin="normal"
            disabled={!editMode}
          />
          <TextField
            width="50%"
            variant='standard'
            label="Quantidade Mínima de Desconto"
            value={formData.quantidadeMinimaDesconto}
            onChange={(e) => handleInputChange('quantidadeMinimaDesconto', e.target.value)}
            margin="normal"
            disabled={!editMode}
          />
          <FormControl sx={{ width: '50%' }}>
            <InputLabel>Tipo de Desconto</InputLabel>
            <Select
              value={formData.tipoDesconto}
              onChange={(e) => handleInputChange('tipoDesconto', e.target.value)}
              disabled={!editMode}
              variant="standard"
            >
              <MenuItem value="percentual">Percentual</MenuItem>
              <MenuItem value="unitario">Unitário</MenuItem>
              <MenuItem value="ambos">Ambos</MenuItem>
            </Select>
          </FormControl>
          {editMode && (

            <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 20 }} sx={{backgroundColor:"#5613AA", fontWeight:"bold", '&:hover': {backgroundColor: "#9d63e6"}}}>
              Salvar Informações
            </Button>
          )}
        </Box>
        <Box sx={{ backgroundColor: '#5613AA', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%', width: '300px', }}>
          {<HexColorPicker color={color} onChange={setColor} />}
        </Box>
      </Box>
    </>
  );
};

export default TabConfigLoja;
