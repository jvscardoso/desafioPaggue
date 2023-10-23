import * as React from 'react';
import FormularioPagamento from '../../components/FormPagamento';
import FormularioEnvio from '../../components/FormEnvio';
import PersonalInfo from '../../components/FormPersonal_info';
import { Typography, Paper, Button, StepContent, StepLabel, Step, Stepper, Box, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

const steps = [
  {
    label: 'Informações Pessoais',
    content: <PersonalInfo step={1} />
  },
  {
    label: 'Informações de Envio',
    content: <FormularioEnvio step={2} />,
  },
  {
    label: 'Informações de Pagamento',
    content: <FormularioPagamento step={3} />,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { ValorTotalState } = React.useContext(Context);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> COMPRAR </Typography>
      <Container sx={{ marginTop: "10px", display: "flex" }}>
        <Grid display="flex" justifyContent="space-between">
          <Box sx={{ mr: "20px", minWidth: "1000px", width: "100%", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", padding: "20px" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    {step.content}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
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
                    <Button sx={{ mt: 1, mr: 1 }}>
                      Voltar a página inicial
                    </Button>
                  </Link>
                </Paper>
              )}
            </Stepper>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <Typography sx={{ backgroundColor: "#5613AA", display: 'flex', }} padding={5} color={"white"} variant='h5' fontWeight="700">Resumo da compra</Typography>
            <Box sx={{ minHeight: "400px", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", minWidth: "400px" }}>
              <Typography variant='h5' fontWeight="700">Valor Total:</Typography>
              <Typography color={"#5613AA"} variant='h5' fontWeight="700"> R${ValorTotalState}</Typography>
            </Box>
          </Box>
        </Grid>
      </Container>

    </>
  );
}
