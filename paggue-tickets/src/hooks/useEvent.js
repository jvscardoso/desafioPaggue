import { useEffect, useState } from 'react';
import { api } from '../services/api';

const useEvent = () => {
  const [eventos, setEventos] = useState([]);

  //Hook de acesso aos dados. 
  useEffect(() => {
    api.get("eventos/")
      .then(response => {
        setEventos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return { eventos };
};

export default useEvent;