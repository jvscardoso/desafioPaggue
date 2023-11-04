import React, { useContext } from 'react';
import { Typography, Button, Box, TextField, Divider } from '@mui/material';
import { Context } from '../context/context';
import useCupons from '../hooks/useCupons';

const CompraResumo = () => {
    const { ValorTotalState, setValorTotalState } = useContext(Context);
    const [couponCode, setCouponCode] = React.useState('');
    const cupons = useCupons()
    const data = cupons.cupons

    const handleCouponChange = (event) => {
        setCouponCode(event.target.value);
    };

    const handleCouponValidation = () => {
        const cupomValido = data.find((cupom) => cupom.nome === couponCode);

        if (cupomValido) {
            console.log("Cupom válido encontrado");
            const desconto = cupomValido.valor;
            const valorTotalComDesconto = ValorTotalState - (ValorTotalState * (desconto / 100));
            setValorTotalState(valorTotalComDesconto);
            console.log(cupomValido);
        } else {
            console.log("Cupom inválido");
        }
    };

    return (
        <>
            <Box display="flex" flexDirection="row" alignItems="center" marginBottom={2}>
                <TextField label="Cupom" variant="outlined" value={couponCode} onChange={handleCouponChange} sx={{ mt: 2 }}/>
                <Button variant="contained" onClick={handleCouponValidation} sx={{ backgroundColor: "#5613AA", fontWeight: "bold", mt: 1, ml: 1, '&:hover': { backgroundColor: "#9d63e6" } }}>
                    Validar Cupom
                </Button>
            </Box>

            <Divider />

            <Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
                <Typography variant='h5' fontWeight="700">Valor Total:</Typography>
                <Typography color={"#5613AA"} variant='h5' fontWeight="700"> R${ValorTotalState}</Typography>
            </Box>
        </>
    )
}

export default CompraResumo