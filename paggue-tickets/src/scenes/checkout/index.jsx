import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

const steps = ['Informações Pessoais', 'Método de Contato', 'Informações de Pagamento'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    contato: '',
    numeroCartao: '',
    endereco: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isStepInvalid = () => {
    switch (activeStep) {
      case 0:
        return !formData.nome || !formData.email || !formData.cpf;
      case 1:
        return !formData.contato;
      case 2:
        return !formData.numeroCartao || !formData.endereco;
      default:
        return false;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} alternativeLabel orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box p={3} style={{ width: '100%' }}>
          {activeStep === 0 && (
            <div>
              <TextField
                fullWidth
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="CPF"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                margin="normal"
              />
            </div>
          )}
          {activeStep === 1 && (
            <div>
              <FormControl fullWidth margin="normal">
                <InputLabel>Método de Contato</InputLabel>
                <Select
                  label="Método de Contato"
                  name="contato"
                  value={formData.contato}
                  onChange={handleInputChange}
                >
                  <MenuItem value="EMAIL">Email</MenuItem>
                  <MenuItem value="SMS">SMS</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {activeStep === 2 && (
            <div>
              <TextField
                fullWidth
                label="Número do Cartão"
                name="numeroCartao"
                value={formData.numeroCartao}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Endereço"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
                margin="normal"
              />
            </div>
          )}
        </Box>
        <div style={{ marginTop: 20 }}>
          <Button disabled={activeStep === 0} onClick={handleBack} style={{ marginRight: 10 }}>
            Voltar
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext} disabled={isStepInvalid()}>
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
