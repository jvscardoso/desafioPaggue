import { useEffect, useState } from 'react';
import { api } from '../services/api';

const useCupons = () => {
  const [cupons, setCupons] = useState([]);

  //Hook de acesso aos dados. 
  useEffect(() => {
    api.get("cupons/")
      .then(response => {
        setCupons(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return { cupons };
};

export default useCupons;