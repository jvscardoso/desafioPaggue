import { Box, Typography, Button } from '@mui/material'
import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  box: {
    width: '800px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    marginTop: '10px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginLeft: '10px',
  },
  info: {
    fontSize: '1rem',
    color: 'white',
    textAlign: 'center',
    alignItems: 'flex-end',
  },
}

const caixaDestaque = ({ imageUrl, address, date, title }) => {
  return (
    <div style={styles.container}>
      <Box sx={styles.box}>
        <img src={imageUrl} alt="Imagem" style={styles.image} />
      </Box>
      <Box sx={{
        backgroundColor: "#5613AA",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "400px",
        width: "300px",
      }}>
        <Box sx={{marginTop: "20px", marginBottom: "20px"}}>
          <Typography variant='h5' color="white" fontWeight="900">{title}</Typography>
        </Box>
        <div style={styles.info}>
          <div>{address}</div>
          <div>{date}</div>
        </div>
        <Button variant="contained" type="submit" sx={{ backgroundColor: "white", fontWeight: "bold", marginTop:"50px",'&:hover': { backgroundColor: "#9d63e6" }}}>
          <Typography variant='h5' color="#5613AA" fontWeight="900">Compre agora</Typography>
        </Button>
      </Box>

    </div>
  );
};

export default caixaDestaque;
