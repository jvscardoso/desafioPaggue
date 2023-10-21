import { Box, Typography } from '@mui/material'
import React from 'react'

const styles = {
  container: {
    display: 'grid',
    flexDirection: 'column',
    gridTemplateColumns: "repeat(12, 1fr)",
    justifyContent: 'center',
    alignItems: "center"
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
    display: 'flex', // Usa flexbox para alinhar os itens à esquerda
    justifyContent: 'left', // Alinha os itens à esquerda
    flexDirection: 'column', // Coloca os itens em uma coluna
    alignItems: 'left',
    marginLeft: '10px',
  },
  info: {
    fontSize: '1rem', // Tamanho das informações
  },
}

const caixaDestaque = ({ imageUrl, address, date, title }) => {
  return (
    <div style={styles.container}>
      <Box sx={styles.box}>
        <img src={imageUrl} alt="Imagem" style={styles.image} />
      </Box>
      <Box sx={{
        backgroundColor: "purple",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        height: "400px",
        width: "300px",
      }}>
        <Box>
          <Typography variant='h5' color= "white" fontWeight="900">{title}</Typography>
        </Box>
        <div style={styles.info}>
          <div>{address}</div>
          <div>{date}</div>
        </div>
      </Box>
    </div>
  );
};

export default caixaDestaque;