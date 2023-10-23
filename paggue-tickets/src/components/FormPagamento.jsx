import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode.react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function FormularioPagamento() {
  const [metodoPagamento, setMetodoPagamento] = React.useState('');
  const [numeroCartao, setNumeroCartao] = React.useState('');
  const [dataVencimento, setDataVencimento] = React.useState('');
  const [qrCodeData, setQRCodeData] = React.useState('');

  const handleMetodoPagamentoChange = (event) => {
    setMetodoPagamento(event.target.value);
  };

  const handleNumeroCartaoChange = (event) => {
    setNumeroCartao(event.target.value);
  };

  const handleDataVencimentoChange = (event) => {
    setDataVencimento(event.target.value);
  };

  const gerarQRCode = () => {
    const qrCodeData = uuidv4(); 
    setQRCodeData(qrCodeData);
  };

  return (
    <>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Método de Pagamento</InputLabel>
        <Select
          value={metodoPagamento}
          onChange={handleMetodoPagamentoChange}
          label="Método de Pagamento"
        >
          <MenuItem value="cartao">Cartão</MenuItem>
          <MenuItem value="pix">PIX</MenuItem>
        </Select>
      </FormControl>

      {metodoPagamento === 'cartao' && (
        <Box>
          <TextField
            label="Número do Cartão"
            fullWidth
            margin="normal"
            variant="outlined"
            value={numeroCartao}
            onChange={handleNumeroCartaoChange}
          />
          <TextField
            label="Data de Vencimento"
            fullWidth
            margin="normal"
            variant="outlined"
            value={dataVencimento}
            onChange={handleDataVencimentoChange}
          />
        </Box>
      )}

      {metodoPagamento === 'pix' && (
        <Box>
          <Button variant="contained" onClick={gerarQRCode} sx={{ marginBottom: 2 }}>
            Gerar QR Code
          </Button>
          {qrCodeData && <QRCode value={qrCodeData} />}
        </Box>
      )}
    </>
  );
}
