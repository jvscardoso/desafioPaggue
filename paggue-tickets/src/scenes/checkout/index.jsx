import * as React from 'react';
import { useContext } from 'react';
import FormularioPagamento from '../../components/FormPagamento';
import FormularioEnvio from '../../components/FormEnvio';
import PersonalInfo from '../../components/FormPersonal_info';
import { Typography, Paper, Button, StepContent, StepLabel, Step, Stepper, Box, Grid, Container, TextField, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import useCupons from '../../hooks/useCupons';

const Checkout = () =>{
  const [activeStep, setActiveStep] = React.useState(0);
  const { ValorTotalState, setValorTotalState } = useContext(Context);
  const [couponCode, setCouponCode] = React.useState('');
  const cupons = useCupons()
  const data = cupons.cupons

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

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCouponValidation = () => {
    const cupomValido = data.find((cupom) => cupom.nome === couponCode);
  
    if (cupomValido) {
      console.log("Cupom válido encontrado");
      const desconto = cupomValido.valor; 
      const valorTotalComDesconto = ValorTotalState - (ValorTotalState * (desconto / 100));
      // Atualize o ValorTotalState usando a função setValorTotalState do contexto
      setValorTotalState(valorTotalComDesconto);
      console.log(cupomValido);
    } else {
      console.log("Cupom inválido");
    }
  };

  return (
    <>
      <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> FINALIZE SUA COMPRA </Typography>
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

        {/* Resumo da compra */}
        <Grid item>
          <Box sx={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}>
            <Typography sx={{ backgroundColor: "#5613AA", display: 'flex', }} padding={5} color={"white"} variant='h5' fontWeight="700">Resumo da compra</Typography>
            <Box>
              <TextField
                label="Cupom"
                variant="outlined"
                value={couponCode}
                onChange={handleCouponChange}
                sx={{ mt: 2 }}
              />
              <Button variant="contained" onClick={handleCouponValidation} sx={{ mt: 1 }}>
                Validar Cupom
              </Button>
            </Box>

            <Divider />

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
export default Checkout