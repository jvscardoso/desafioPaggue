import { Box, IconButton  } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import logo from '../../img/logo.png'

const Topbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center', 
        p: '2',
        marginBottom: '20px',
      }}
    >

      {/* Logo */}
      <Link to = "https://paggue.io/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Logo" style={{maxWidth: '150px',maxHeight: '100%',marginRight: 'auto',}}/>
      </Link>

      {/* Botoes */}
      <Box display="flex">
        <Link to="/">
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>

        <Link to="/profile">
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Topbar;
