import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Paper, Container } from '@mui/material';
import FormSetores from './FormSetores';
import FormEventos from './FormEventos';
import FormLote from './FormLote';

const steps = ['Informações do Evento', 'Informações de Setor', 'Informações de Lote'];

const CadastroEventos = ( {onCloseModal} ) => {
  const [activeStep, setActiveStep] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinalizar = () => {
    onCloseModal()
    setFinalizado(true);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Cadastro de Eventos
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label} sx={{ '& .MuiStepIcon-root': { color: "#5613AA", fontSize: "2rem" } }}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ marginTop: 20 }}>
          {activeStep === 0 && <FormEventos />}
          {activeStep === 1 && <FormSetores />}
          {activeStep === 2 && <FormLote />}
        </div>
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }} disabled={activeStep === 0 || finalizado}onClick={handleBack}>
            Voltar
          </Button>
          <Button variant="contained"sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }}onClick={activeStep === steps.length - 1 ? handleFinalizar : handleNext}>
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default CadastroEventos;
