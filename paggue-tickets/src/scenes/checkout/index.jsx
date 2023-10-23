import * as React from 'react';
import FormularioPagamento from '../../components/FormPagamento';
import FormularioEnvio from '../../components/FormEnvio';
import PersonalInfo from '../../components/FormPersonal_info';
import { Typography, Paper, Button, StepContent, StepLabel, Step, Stepper, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { ContextValorTotal } from '../../context/contextValorTotal';

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const { ValorTotalState, setValorTotalState } = React.useContext(ContextValorTotal)
  React.useEffect(()=>{console.log(ValorTotalState)}, [])

  return (
    <Grid>
      <Box sx={{ maxWidth: 400 }}>
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
        </Stepper>
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
      </Box>
      <Box>

      </Box>
    </Grid>
  );
}