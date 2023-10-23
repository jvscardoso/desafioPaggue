import React, { useState } from 'react';
import { Box, Tab, Tabs, TextField, Button, Typography, Snackbar  } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import TabEventos from '../../components/TabEventos';
import { useAuth } from '../../hooks/useAuth';
import TabCupons from '../../components/TabCupons';
import AvatarUpload from '../../components/AvatarUploader';
import TabConfigLoja from '../../components/TabConfigLoja';

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    nome: '',
    senha: '',
    email: '',
    telefone: '',
    tipoConta: '',
  });

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleInputChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const isValid = () => {
    return userData.nome && userData.senha && userData.email && userData.telefone;
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSave = () => {
    if (isValid()) {
      setSnackbarSeverity('success');
      setSnackbarMessage('Informações salvas com sucesso!');
    } else {
      setSnackbarSeverity('error');
      setSnackbarMessage('Por favor, preencha todos os campos obrigatórios.');
    }
    setSnackbarOpen(true);
    setEditMode(false);
  };
  const { data } = useAuth()

  return (
    <div>
      <Tabs value={tabIndex} onChange={handleTabChange} TabIndicatorProps={{ style: { backgroundColor: '#5613AA' } }}>
        <Tab label="Informações pessoais" />
        {data?.user?.isAdmin ? <Tab label="Configurações da loja" /> : null}
        {data?.user?.isAdmin ? <Tab label="Evento" /> : null}
        {data?.user?.isAdmin ? <Tab label="Cupons" /> : null}
      </Tabs>
      {tabIndex === 0 && (
        <>
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography sx={{ fontWeight: '800', fontSize: '40px' }}> Dados do Usuário </Typography>
            {!editMode && <Button variant="contained" sx={{ backgroundColor: "#5613AA", fontWeight: "bold", '&:hover': { backgroundColor: "#9d63e6" } }} onClick={() => setEditMode(true)}>Editar Dados</Button>}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' }}>
            <Box p={3} backgroundColor="#F4F4F4">
              <TextField
                fullWidth
                variant='standard'
                label="Nome"
                value={userData.nome}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                margin="normal"
                disabled={!editMode}
              />
              <TextField
                fullWidth
                variant='standard'
                label="Senha"
                type="password"
                value={userData.senha}
                onChange={(e) => handleInputChange('senha', e.target.value)}
                margin="normal"
                disabled={!editMode}
              />
              <TextField
                fullWidth
                variant='standard'
                label="Email"
                value={userData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                margin="normal"
                disabled={!editMode}
              />
              <TextField
                fullWidth
                variant='standard'
                label="Telefone"
                value={userData.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
                margin="normal"
                disabled={!editMode}
              />
              {editMode && (
                <Button variant="contained" color="primary" onClick={handleSave} sx={{ backgroundColor: "#5613AA", fontWeight: "bold", marginTop: "20px" }}>
                  Salvar Informações
                </Button>
              )}
            </Box>
            <Box sx={{ backgroundColor: '#5613AA', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100%', width: '300px' }}>
              {<AvatarUpload />}
            </Box>
          </Box>
          <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </>
      )}
      {data?.user?.isAdmin && (
        <>
          {tabIndex === 1 && <TabConfigLoja />}
          {tabIndex === 2 && <TabEventos />}
          {tabIndex === 3 && <TabCupons />}
        </>
      )}
    </div>
  );
};

export default Profile;