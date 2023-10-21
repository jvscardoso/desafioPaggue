import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function FormularioEnvio(props) {
  const [envioEmail, setEnvioEmail] = React.useState(false);
  const [envioSMS, setEnvioSMS] = React.useState(false);

  const handleEmailChange = (event) => {
    setEnvioEmail(event.target.checked);
  };

  const handleSMSChange = (event) => {
    setEnvioSMS(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={envioEmail} onChange={handleEmailChange} />}
        label="Enviar por Email"
      />
      <FormControlLabel
        control={<Checkbox checked={envioSMS} onChange={handleSMSChange} />}
        label="Enviar por SMS"
      />
    </FormGroup>
  );
}
