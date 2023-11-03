import React, { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Context } from '../context/context';

export default function FormularioEnvio(props) {
  const {formularioEnvio, setFormularioEnvio} = useContext(Context);

  const handleEmailChange = (event) => {
    setFormularioEnvio({
      ...formularioEnvio,
      envioEmail: event.target.checked,
    });
  };

  const handleSMSChange = (event) => {
    setFormularioEnvio({
      ...formularioEnvio,
      envioSMS: event.target.checked,
    });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={formularioEnvio.envioEmail} onChange={handleEmailChange} />}
        label="Enviar por Email"
      />
      <FormControlLabel
        control={<Checkbox checked={formularioEnvio.envioSMS} onChange={handleSMSChange} />}
        label="Enviar por SMS"
      />
    </FormGroup>
  );
}
