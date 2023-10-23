import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function PersonalInfo(props) {
  const { step } = props;

  const [formData, setFormData] = React.useState({
    nome: '',
    cpf: '',
    endereco: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {step === 1 && (
        <form>
          <TextField
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="CPF"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Endereço"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </form>
      )}
    </>
  );
}
