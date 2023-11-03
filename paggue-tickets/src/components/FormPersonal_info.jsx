import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Context } from '../context/context';
import { useContext } from 'react';

export default function PersonalInfo() {
  const { personalInfo, setPersonalInfo } = useContext(Context)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
      <form>
        <TextField
          label="Nome"
          name="nome"
          value={personalInfo.nome}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="CPF"
          name="cpf"
          value={personalInfo.cpf}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Endereço"
          name="endereco"
          value={personalInfo.endereco}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </form>
  );
}
