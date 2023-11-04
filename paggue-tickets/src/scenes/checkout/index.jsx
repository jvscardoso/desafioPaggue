import * as React from 'react';
import { useContext} from 'react';
import FormularioPagamento from '../../components/FormPagamento';
import FormularioEnvio from '../../components/FormEnvio';
import PersonalInfo from '../../components/FormPersonal_info';
import { Typography, Paper, Button, StepContent, StepLabel, Step, Stepper, Box, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import io from 'socket.io-client';
import CompraResumo from '../../components/CompraResumo';

const socket = io('http://localhost:3002');

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { personalInfo } = useContext(Context)
  const { formularioEnvio } = useContext(Context)

  const steps = [
    {
      label: 'Resumo da compra',
      content: <CompraResumo step={1} />
    },
    {
      label: 'Informações Pessoais',
      content: <PersonalInfo step={2} />
    },
    {
      label: 'Informações de Envio',
      content: <FormularioEnvio step={3} />
    },
    {
      label: 'Informações de Pagamento',
      content: <FormularioPagamento step={4} />
    },
    {
      label: 'Confirmação de compra',
      content:
        <>
          <Typography variant='h5' fontWeight="bold"> Confira seus dados antes de confirmar a compra</Typography>
          <Typography fontWeight="bold">Nome: {personalInfo.nome}</Typography>
          <Typography fontWeight="bold">CPF: {personalInfo.cpf}</Typography>
          <Typography fontWeight="bold">Endereço: {personalInfo.endereco}</Typography>
          {formularioEnvio.envioEmail && <Typography fontWeight="bold" >Forma de Envio: Email</Typography>}
          {formularioEnvio.envioSMS && <Typography fontWeight="bold">Forma de Envio: SMS</Typography>}
        </>
    }
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleConfirmarCompra = () => {
    socket.emit('confirmarCompra', { mensagem: 'Compra confirmada!' });
  };

  return (
    <>
      <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> FINALIZE SUA COMPRA </Typography>
      <Container sx={{ marginTop: "10px", display: "flex" }}>
        <Grid display="flex" justifyContent="space-between">
          <Box sx={{ mr: "20px", minWidth: "1000px", width: "100%", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", padding: "20px" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label} sx={{ '& .MuiStepIcon-root': { color: "#5613AA", fontSize: "2rem" } }}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    {step.content}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: "#5613AA", fontWeight: "bold", mt: 1, mr: 1, '&:hover': { backgroundColor: "#9d63e6" } }}>
                          {index === steps.length - 1 ? 'Confirmar compra' : 'Próximo'}
                        </Button>
                        <Button disabled={index === 0} onClick={handleBack} sx={{color: "#5613AA", fontWeight: "bold", mt: 1, mr: 1, '&:hover': { backgroundColor: "#9d63e6" }}}>
                          Voltar
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>Pagamento registrado!</Typography>
                  <Link to="/">
                    <Button onClick={handleConfirmarCompra} sx={{ mt: 1, mr: 1 }}>
                      Voltar ao início
                    </Button>
                  </Link>
                </Paper>
              )}
            </Stepper>
          </Box>
        </Grid>
      </Container>

    </>
  );
}
export default Checkout