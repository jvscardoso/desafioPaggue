import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Radio, RadioGroup, FormLabel, FormGroup, Checkbox, Button } from '@mui/material';
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="CNPJ"
        name="cnpj"
        value={formData.cnpj}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Razão Social"
        name="razaoSocial"
        value={formData.razaoSocial}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Nome Fantasia"
        name="nomeFantasia"
        value={formData.nomeFantasia}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Senha"
        type="password"
        name="senha"
        value={formData.senha}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Quantidade Mínima para Desconto"
        type="number"
        name="quantidadeMinimaDesconto"
        value={formData.quantidadeMinimaDesconto}
        onChange={handleInputChange}
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Tipo de Desconto</InputLabel>
        <Select
          label="Tipo de Desconto"
          name="tipoDesconto"
          value={formData.tipoDesconto}
          onChange={handleInputChange}
        >
          <MenuItem value="percentual">Percentual</MenuItem>
          <MenuItem value="unitario">Unitário</MenuItem>
          <MenuItem value="ambos">Ambos</MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Cor</FormLabel>
        <FormGroup>
            <HexColorPicker color={color} onChange={setColor} />;
        </FormGroup>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default TabConfigLoja;
