import React, { useState } from 'react';
import {Box, Tab, Tabs, TextField, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import TabEventos from '../../components/TabEventos';
import { useAuth } from '../../hooks/useAuth';
import TabCupons from '../../components/TabCupons';

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [userData, setUserData] = useState({
    nome: 'Fulano de Tal',
    senha: '********',
    email: 'fulano@example.com',
    telefone: '(00) 12345-6789',
    tipoConta: 'usuario',
  });

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleInputChange = (field, value) => {
    setUserData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log('Dados salvos:', userData);
  };

  const {data} = useAuth()
  console.log(data.user)

  return (
    <div>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Informações pessoais" />
          <Tab label="Configurações da Conta" />
          {data?.user?.isAdmin ? <Tab label="Evento" /> : null}
          {data?.user?.isAdmin ? <Tab label="Cupons" /> : null}
        </Tabs>
      {tabIndex === 0 && (
        <Box p={3}>
          <TextField
            fullWidth
            label="Nome"
            value={userData.nome}
            onChange={e => handleInputChange('nome', e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Senha"
            value={userData.senha}
            onChange={e => handleInputChange('senha', e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            value={userData.email}
            onChange={e => handleInputChange('email', e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Telefone"
            value={userData.telefone}
            onChange={e => handleInputChange('telefone', e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 20 }}>
            Salvar Informações
          </Button>
        </Box>
      )}
      {tabIndex === 1 && (
        <Box p={3}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Tipo de Conta</InputLabel>
            <Select
              value={userData.tipoConta}
              onChange={e => handleInputChange('tipoConta', e.target.value)}
            >
              <MenuItem value="usuario">Usuário</MenuItem>
              <MenuItem value="administrador">Administrador</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 20 }}>
            Salvar Configurações
          </Button>
        </Box>
      )}
      {data?.user?.isAdmin && (
        <>
          {tabIndex == 2 && <TabEventos />}
          {tabIndex == 3 && <TabCupons />}
        </>
      )}
    </div>
  );
};

export default Profile;
//tabIndex === 2 &&