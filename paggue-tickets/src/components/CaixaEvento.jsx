import { Box } from '@mui/material'
import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "white"
  },
  box: {
    width: '400px', 
    height: '200px', 
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
    display: 'flex', 
    justifyContent: 'left', 
    flexDirection: 'column',
    alignItems: 'left',
    marginLeft: '10px',
  },
  title: {
    fontSize: '2rem', 
    fontWeight: 'bold', 
    color: "Black"
  },
  info: {
    fontSize: '1rem', 
    marginBottom: "10px"
  },
}

const caixaEvento = ({ imageUrl, address, date, title }) => {
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

export default caixaEvento;
