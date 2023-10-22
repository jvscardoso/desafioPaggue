import React, { useState } from 'react';
import { Box, Tab, Tabs, TextField, Button, FormControl, InputLabel, Select, Typography, MenuItem } from '@mui/material';
import TabEventos from '../../components/TabEventos';
import { useAuth } from '../../hooks/useAuth';
import TabCupons from '../../components/TabCupons';
import AvatarUpload from '../../components/AvatarUploader';
import TabLotes from '../../components/TabLotes';
import TabConfigLoja from '../../components/TabConfigLoja';
import TabSetores from '../../components/TabSetores';

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

  const { data } = useAuth()
  console.log(data.user)

  return (
    <div>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Informações pessoais" />
        <Tab label="Configurações da Conta" />
        {data?.user?.isAdmin ? <Tab label="Configurações da loja" /> : null}
        {data?.user?.isAdmin ? <Tab label="Evento" /> : null}
        {data?.user?.isAdmin ? <Tab label="Cupons" /> : null}
        {data?.user?.isAdmin ? <Tab label="Setores" /> : null}
        {data?.user?.isAdmin ? <Tab label="Lotes" /> : null}
      </Tabs>
      {tabIndex === 0 && (
        <Box>
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: "800", fontSize: "40px" }}> Dados do Usuário </Typography>
            <Button variant="contained">Editar Dados</Button>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
            <Box p={3} backgroundColor="#D9D9D9">
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
            <Box sx={{backgroundColor: "purple",display: 'flex',flexDirection: 'column',alignItems: 'left',height: "400px",width: "300px", }}>
              <AvatarUpload />
            </Box>
          </Box>
        </Box>
      )}
      {tabIndex === 1 && (
        <Box>
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
        </Box>
      )}
      {data?.user?.isAdmin && (
        <>
          {tabIndex == 3 && <TabEventos />}
          {tabIndex == 4 && <TabCupons />}
          {tabIndex == 5 && <TabSetores />}
          {tabIndex == 6 && <TabLotes />}
          {tabIndex == 2 && <TabConfigLoja />}
        </>
      )}
    </div>
  );
};

export default Profile;
//tabIndex === 2 &&