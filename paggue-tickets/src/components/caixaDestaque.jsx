import { Box } from '@mui/material'
import React from 'react'

const styles = {
  container: {
    display: 'grid',
    flexDirection: 'column',
    gridTemplateColumns:"repeat(12, 1fr)"
  },
  box: {
    width: '400px', // Garante que o componente Box ocupe 100% da largura disponível
    height: '200px', // Garante que o componente Box ocupe 100% da altura disponível
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    borderRadius: "10px 10px 0px 0px"
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
  title: {
    fontSize: '2rem', // Tamanho do título
    fontWeight: 'bold', // Estilo do título
    color: "Black"
  },
  info: {
    fontSize: '1rem', // Tamanho das informações
    marginBottom: "10px"
  },
}

const caixaDestaque = ({ imageUrl, address, date, title }) => {
  return (
    <div style={styles.container}>
      <Box sx={styles.box}>
        <img src={imageUrl} alt="Imagem" style={styles.image}/>
      </Box>
      <div style={styles.textContainer}>
        <div style={styles.title}>{title}</div>
        <div style={styles.info}>
          <div>{address}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default caixaDestaque;